import { SHOW_ERRORS, SHOW_SUCCESS, SHOW_LOADING } from "../Action/types";

const initialState = {
    loading: false,
    success: "",
    error: "",
  };
  
  export default (state = initialState, action) => {
      switch (action.type) {
        case SHOW_ERRORS:
          return {
                  loading: false,
                  success: " ",
                  error: action.payload
                }
        case SHOW_LOADING:
          return {
                  loading: true,
                  success: " ",
                  error: " "
              }
        case SHOW_SUCCESS:
          return {
                  loading: false,
                  success: action.payload,
                  error: " "
              }
        default:
          return state;
      }
    }
  