import {
    GET_FAVORITE_CONTACTS_ACTION,
    GET_FAVORITE_CONTACTS_SUCCESS,
    GET_FAILED_ACTION,
    ContactActions
} from './actions';

const initialState = {
    data: [],
    loading: false,
    error: null
};

export function favoriteContactsReducer(state = initialState, action: ContactActions) {
    switch (action.type) {
        case GET_FAVORITE_CONTACTS_ACTION:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_FAVORITE_CONTACTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: null
            };

        case GET_FAILED_ACTION:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
}