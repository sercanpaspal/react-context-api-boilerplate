import {
    LOGIN,
    LOGOUT
} from '../constants/actionTypes';

export default (state, action) => {
    switch(action.type){
        case LOGIN:
            return {isLoggedIn: true, user: action.payload};
        case LOGOUT:
            return {isLoggedIn: false, user: null}
        default:
            return state;
    }
}