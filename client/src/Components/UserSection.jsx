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
    const user = useSelector(state => state.user.user)

    useEffect(() => {
        dispatch(getUserList());
    }, []);

    return (
        <div className="col m-0">
            <b className="mb-1 col">Users</b>
            {user?.map((user) => (
            <div className="list-group col">
                <div className="list-group-item col">
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
                <div className="list-group-item col">
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
                <div className="list-group-item col">
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