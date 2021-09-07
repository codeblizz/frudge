import { SHOW_USER_LIST, SHOW_ERRORS, SHOW_SUCCESS, SET_LOADING, CLEAR_LOADING, CLEAR_ERRORS } from "./types";
import axios from "axios";

export const getUserList = () => async dispatch => {
    dispatch({ type: CLEAR_ERRORS });
    dispatch({ type: SET_LOADING });
    let res;
    try {
        res = await axios(`https://jsonplaceholder.typicode.com/users?_limit=4`);
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
        type: SHOW_USER_LIST, 
        user: res?.data,
    });
}