import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNewsFeed } from "../Redux/Action/newsFeedAction";


const IndustryNews = () => {
    const dispatch = useDispatch();
    const newsFeed = useSelector(state => state.news.feed);

    const fetchNewsFeed = async () => {
        dispatch(getNewsFeed());
    };

    useEffect(() => {
        fetchNewsFeed();
    }, []);

    return (
        <div className="col">
        <b className="col">Industry News</b>
        {newsFeed?.map((feed, i) => (
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
        </div>
    )
}
export default IndustryNews;
