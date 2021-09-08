import { SHOW_NEWS_FEED, SHOW_ERRORS, SET_LOADING, CLEAR_LOADING, CLEAR_ERRORS } from "./types";
import axios from "axios";

export const getNewsFeed = () => async dispatch => {
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_LOADING });
    let res;
    try {
        res = await axios("https://jsonplaceholder.typicode.com/posts?_limit=2");
    } catch(error) {
        dispatch({ type: CLEAR_LOADING });
        dispatch({ 
            type: SHOW_ERRORS,
            data: error.response.data
        })
        return;
    }
    dispatch({ type: CLEAR_LOADING });
    dispatch({ 
        type: SHOW_NEWS_FEED, 
        feed: res?.data,
    });
}