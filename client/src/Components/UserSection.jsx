import React, { useState, useEffect } from 'react';
import comment1 from "../Assets/comment1.png";
import comment2 from "../Assets/comment2.png";
import comment3 from "../Assets/comment3.png";
import axios from "axios";
import * as BsIcons from "react-icons/bs";

const dotIcon = (
    <BsIcons.BsDot className="fw-1 fs-1" style={{color:"#248232"}}/>
)

const UserSection = () => {
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
            <div className="list-group">
                <h6 className="mb-1">Users</h6>
                <div className="list-group-item">
                    <div className="row mb-2">
                        <div className="col">
                            <img src={comment1} className="ellipse mt-2"/>
                        </div>
                        <div className="col">
                            <small className="row">{user.name}</small>
                            {/* <small className="row">{dotIcon} Online</small> */}
                        </div>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="row row-col-2 mb-2">
                        <div className="col">
                            <img src={comment2} className="ellipse mt-2"/>
                        </div>
                        <div className="col">
                            <small className="row">{user.name}</small>
                            {/* <small className="row">{dotIcon} Online</small> */}
                        </div>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="row row-col-2 mb-2">
                        <div className="col">
                            <img src={comment3} className="ellipse mt-2"/>
                        </div>
                        <div className="col">
                            <small className="row">{user.name}</small>
                            {/* <small className="row">{dotIcon} Online</small> */}
                        </div>
                    </div>
                </div>
            </div>
            ))}      
        </div>
    )
}
export default UserSection;