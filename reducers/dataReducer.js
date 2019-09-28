import {CHANGE_BUTTON_TITLE} from '../constants';

const initialState = {
    button_title: 'Button1',
    title_index: 0,
}

const BtnTitles = [
    'Button1',
    'Button2',
    'Button3',
]

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_BUTTON_TITLE:
            return {
                ...state,
                button_title: BtnTitles[(state.title_index + 1) % 3],
                title_index: state.title_index + 1,
            }
        default:
            return state;
    }
}
