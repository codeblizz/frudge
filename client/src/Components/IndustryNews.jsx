import React, { useState, useEffect } from 'react';
// import get from "../hookHelper";
import axios from "axios";

const IndustryNews = () => {
    const [ newsFeed, setNewsFeed ] = useState([]);

    const fetchNewsFeed = async () => {
        try {
            let res = await axios("https://jsonplaceholder.typicode.com/posts?_limit=1")
            setNewsFeed(res.data);
        } catch(err) {
            console.log("error");
        }
    };

    useEffect(() => {
        fetchNewsFeed();
    }, []);

    return (
        <>
        <b>Industry News</b>
        {newsFeed.map((feed, i) => (
            <div key={i} className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{feed.title}</h5>
                    </div>
                    <p className="mb-1">{feed.body}</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{feed.title}</h5>
                    </div>
                    <p className="mb-1">{feed.body}</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{feed.title}</h5>
                    </div>
                    <p className="mb-1">{feed.body}</p>
                </a>
            </div>
        ))}
        </>
    )
}
export default IndustryNews;
