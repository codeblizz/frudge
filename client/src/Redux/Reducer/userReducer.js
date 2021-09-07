import { SHOW_USER_LIST, SHOW_ERRORS, SHOW_SUCCESS, SHOW_LOADING, SET_LOADING, CLEAR_LOADING, CLEAR_ERRORS } from "../Action/types";

const initialState = {
    loading: false,
    success: "",
    error: "",
    user: []
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
    case SHOW_USER_LIST:
        return {
            user: action.user
        }
    default:
        return state;
    }
}
  