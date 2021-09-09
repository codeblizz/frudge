import React, { useState, useEffect } from 'react';
import comment1 from "../Assets/comment1.png";
import comment2 from "../Assets/comment2.png";
import comment3 from "../Assets/comment3.png";
import { useDispatch, useSelector } from "react-redux";
import * as BsIcons from "react-icons/bs";
import { getUserList } from "../Redux/Action/userAction"

const dotIcon = (
    <BsIcons.BsDot className="fw-1 fs-1" style={{color:"#248232"}}/>
)

const UserSection = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.fudge.user)

    useEffect(() => {
        dispatch(getUserList());
    }, []);

    return (
        <div className="col m-0">
            <b className="mb-1 col">Users</b>
            {user?.map((user, i) => (
            <div key={i} className="form-control container">
                <div className="row justify-content-center mb-1 mt-1">
                    <div className="col-4 align-self-center">
                        <img src={comment1} className="ellipse mt-1"/>
                    </div>
                    <div className="col-8 align-self-start">
                        <small className="col namespace mb-0">{user.name}</small>
                        <div className="w-100"></div>
                        <em className="col-12 namespace">{dotIcon}Online</em>
                    </div>
                </div>
                <div className="row justify-content-center mb-1 mt-1">
                    <div className="col-4 align-self-center">
                        <img src={comment2} className="ellipse mt-1"/>
                    </div>
                    <div className="col-8 align-self-start">
                        <small className="col namespace">{user.name}</small>
                        <div className="w-100"></div>
                        <em className="col-12 namespace">{dotIcon}Online</em>
                    </div>
                </div>
                <div className="row justify-content-center mb-2 mt-2">
                    <div className="col-4 align-self-center">
                        <img src={comment3} className="ellipse mt-1"/>
                    </div>
                    <div className="col-8 align-self-start">
                        <small className="col namespace">{user.name}</small>
                        <div className="w-100"></div>
                        <em className="col-12 namespace">{dotIcon}Online</em>
                    </div>
                </div>
            </div>
            ))}      
        </div>
    )
}
export default UserSection;