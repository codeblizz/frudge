import { SHOW_COMMENT_LIST, SHOW_ERRORS, SHOW_SUCCESS, SET_LOADING, CLEAR_LOADING, CLEAR_ERRORS } from "./types";
import axios from "axios";

export const getCommentList = () => async dispatch => {
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_LOADING });
    let res;
    try {
        res = await axios(`https://jsonplaceholder.typicode.com/comments?_limit=1`);
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
        type: SHOW_COMMENT_LIST, 
        comment: res?.data,
    });
}