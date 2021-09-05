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
        <div className="container">
            {user.map((user) => (
                <div className="row">
                    <div className="col-1 justify-content-start mt-2">
                        <img src={UserImg} className="ellipse"/>
                    </div>
                    <div className="col justify-content-start mt-2 message">
                        <p className="message">
                            Welcome, <strong>{user.name}</strong> Here's your personalized financial dashboard
                        </p>
                    </div>
                    <div className="col mt-2">
                        <div className="row">
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
                </div>
            ))}
            <h1 className="fs-5 exception card-title">Dashboard Home</h1>
        </div>
    )
}
export default Header;