import {CHANGE_THEME_COLOR} from '../actions/themes';

const initialState = {
    primaryColor: '#4f6d7a',
};

export default  (state = initialState, action) =>{
    switch (action.type){
        case CHANGE_THEME_COLOR:
            return {
                ...state,
                primaryColor: action.color,
            };
        default:
            return state;
    }
};