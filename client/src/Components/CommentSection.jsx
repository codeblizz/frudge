import React, { useState, useEffect } from 'react';
import comment1 from "../Assets/comment1.png";
import comment2 from "../Assets/comment2.png";
import comment3 from "../Assets/comment3.png";
import { useDispatch, useSelector } from "react-redux";
import { getCommentList } from "../Redux/Action/commentAction";

const CommentSection = () => {
    const dispatch = useDispatch();
    const comment = useSelector(state => state.comment.comment);
    console.log("comment", comment);

    useEffect(() => {
        dispatch(getCommentList());
    }, []);

    return (
        <div className="col">
            {comment?.map((c) => (
            <div className="list-group col">
                <b className="mb-1 col">Top Comments</b>
                <div className="list-group-item col">
                    <div className="row mb-2">
                        <div className="col">
                            <img src={comment1} className="ellipse mt-2"/>
                        </div>
                        <div className="col">
                            <small className="col">{c.email}</small>
                            <small className="col">2 mins ago</small>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <span className="mb-1 mt-1">{c.body}</span>
                    </div>
                </div>
                <div className="list-group-item col">
                    <div className="row mb-2">
                        <div className="col">
                            <img src={comment2} className="ellipse mt-2"/>
                        </div>
                        <div className="col">
                            <small className="col">{c.email}</small>
                            <small className="col">30 mins ago</small>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <span className="mb-1 mt-1">{c.body}</span>
                    </div>
                </div>
                <div className="list-group-item col">
                    <div className="row mb-2">
                        <div className="col">
                            <img src={comment3} className="ellipse mt-2"/>
                        </div>
                        <div className="col">
                            <small className="col">{c.email}</small>
                            <small className="col">1 hours ago</small>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <span href="#" className="mb-1 mt-1">{c.body}</span>
                    </div>
                </div>
            </div> 
            ))}     
        </div>
    )
}
export default CommentSection;
