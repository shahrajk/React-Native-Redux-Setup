import {
    SUMBITDATA
} from './actionTypes'

// Submit data
export function Submit(data) {
    console.log('action data', data)
    return dispatch => {
        dispatch({ type: SUMBITDATA, payload: data });
    };
};