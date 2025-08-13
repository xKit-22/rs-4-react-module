import {
    GET_GROUP_CONTACTS_ACTION,
    GET_GROUP_CONTACTS_SUCCESS,
    GET_FAILED_ACTION,
    ContactActions
} from './actions';

const initialState = {
    data: [],
    loading: false,
    error: null
};

export function groupContactsReducer(state = initialState, action: ContactActions) {
    switch (action.type) {
        case GET_GROUP_CONTACTS_ACTION:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_GROUP_CONTACTS_SUCCESS:
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