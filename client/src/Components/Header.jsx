import React, { useState, useEffect } from "react";
import * as FeatherIcon from "react-icons/fi";
import UserImg from "../Assets/Ellipse379.png";
import axios from "axios";
import Select from "react-select"; 

const Header = () => {
    const [ user, setUser ] = useState([])

    const fetchUserData = async () => {
        try {
            let res = await axios("https://jsonplaceholder.typicode.com/users?_limit=1");
            setUser(res.data);
        } catch(error) {
            console.log("error");
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
            <div className="col">
                {user.map((user) => (
                <div className="col-sm-8">
                    <div className="d-flex flex-nowrap p-0 row">
                        <div className="col-1 mt-2">
                            <img src={UserImg} className="m-2 ellipse"/>
                        </div>
                        <p className="d-flex col-5 text-nowrap mt-3 justify-conter-start align-content-center message">
                            Welcome, <b className="mx-2">{user.name}</b> Here's your personalized financial dashboard
                        </p>
                    </div>
                </div>))}
                {/* <div className="col-sm-4 mt-2">
                    <div className="row no-padding">
                        <div className="form-group g-1 m-0">
                            <label className="form-label col">Currency</label>
                            <select className="form-select form-select-sm col selectHeader p-0 m-0">
                                <option value="GBP">GBP</option>
                                <option value="USD">USD</option>
                                <option value="AED">AED</option>
                            </select>
                            <label className="form-label col">My Account</label>
                            <select className="form-select form-select-sm col selectHeader p-0 m-0">
                                <option value="">Me</option>
                            </select>
                        </div>
                    </div>
                </div> */}
            </div>
    )
}
export default Header;