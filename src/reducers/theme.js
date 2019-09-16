import {
    TOGGLE_THEME
} from '../constants/actionTypes';

export default (state = false, {type}) => {
    switch(type){
        case TOGGLE_THEME:
            return !state;
        default:
            return state;
    }
}