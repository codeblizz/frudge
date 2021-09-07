import {
    SHOW_ERRORS,
    SHOW_SUCCESS, 
    SHOW_LOADING
   } from "./types";

export const getErrors = (errors) => {
return {
    type: SHOW_ERRORS,
    payload: errors
}
}
export const getSuccess = (success) => {
return {
    type: SHOW_SUCCESS,
    payload: success
}
}
export const getLoading = (loading) => {
return {
    type: SHOW_LOADING,
    payload: loading
}
}
