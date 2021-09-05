import React, { useState, useEffect } from 'react';
import comment1 from "../Assets/comment1.png";
import comment2 from "../Assets/comment2.png";
import comment3 from "../Assets/comment3.png";
import axios from "axios";

const CommentSection = () => {
    const [ comment, setComment ] = useState([])

    const fetchCommentData = async () => {
        try {
            let res = await axios("https://jsonplaceholder.typicode.com/comments?_limit=1_index=2");
            setComment(res.data);
        } catch(error) {
            console.log("error");
        }
    };

    useEffect(() => {
        fetchCommentData();
    }, []);
    return (
        <div className="container">
            {comment.map((c) => (
            <div className="list-group">
                <h6 className="mb-1">Top Comments</h6>
                <div className="list-group-item">
                    <div className="row row-col-2 mb-2">
                        <div className="col">
                            <img src={comment1} className="ellipse mt-2"/>
                        </div>
                        <div className="col">
                            <small className="row row-col-1">{c.email}</small>
                            <small className="row row-col-1">2 mins ago</small>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <span className="mb-1 mt-1">{c.body}</span>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="row row-col-2 mb-2">
                        <div className="col">
                            <img src={comment2} className="ellipse mt-2"/>
                        </div>
                        <div className="col">
                            <small className="row">{c.email}</small>
                            <small className="row">30 mins ago</small>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <span className="mb-1 mt-1">{c.body}</span>
                    </div>
                </div>
                <div className="list-group-item">
                    <div className="row row-col-2 mb-2">
                        <div className="col">
                            <img src={comment3} className="ellipse mt-2"/>
                        </div>
                        <div className="col">
                            <small className="row">{c.email}</small>
                            <small className="row">1 hours ago</small>
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
