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
        <div className="row justify-content-between my-0 mx-0">
            {user.map((user) => (
            <div className="col-7">
                <div className="d-flex flex-nowrap p-0 row">
                    <div className="col-1 mt-2">
                        <img src={UserImg} className="m-2 ellipse"/>
                    </div>
                    <p className="d-flex col-5 text-nowrap mt-4 justify-conter-start align-content-center message">
                        Welcome, <b className="mx-2">{user.name}</b> Here's your personalized financial dashboard
                    </p>
                </div>
            </div>))}
            <div className="col-3 align-self-end m-0 p-0">
                <div className="row">
                    <div className="col mt-0 pt-0">
                        <div className="form-group row">
                            <label className="form-label col namespace">Currency</label>
                            <select className="form-select form-control col select-header p-0 m-0">
                                <option value=""></option>
                                <option value="GBP">GBP</option>
                                <option value="USD">USD</option>
                                <option value="AED">AED</option>
                            </select>
                        </div>
                    </div>
                    <div className="col mt-0 pt-0">
                        <div className="form-group row">
                            <label className="form-label col namespace">Account</label>
                            <select className="form-select form-control col select-header p-0 m-0">
                                <option value=""></option>
                                <option value="">Me</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;