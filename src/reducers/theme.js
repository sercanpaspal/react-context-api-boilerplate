import {
    TOGGLE_THEME
} from '../constants/actionTypes';

export default (state, {type}) => {
    switch(type){
        case TOGGLE_THEME:
            return !state;
        default:
            return state;
    }
}