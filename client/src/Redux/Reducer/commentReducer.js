import { SHOW_COMMENT_LIST, SHOW_ERRORS, SHOW_SUCCESS, SHOW_LOADING, SET_LOADING, CLEAR_LOADING, CLEAR_ERRORS } from "../Action/types";

const initialState = {
    loading: false,
    success: "",
    error: "",
    comment: []
  };
  
export default (state = initialState, action) => {
    switch (action.type) {
    case SHOW_ERRORS:
        return {
            error: action.data
        }
    case SHOW_LOADING:
        return {
            loading: true,
        }
    case SHOW_SUCCESS:
        return {
            success: action.data,
        }
    case SHOW_COMMENT_LIST:
        return {
            comment: action.comment
        }
    default:
        return state;
    }
}