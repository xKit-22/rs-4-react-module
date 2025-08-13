import {
    GET_CONTACTS_ACTION,
    GET_CONTACTS_SUCCESS,
    GET_FAILED_ACTION,
    ContactActions
} from './actions';
import {ContactDto} from "src/types/dto/ContactDto";

const initialState = {
    data: [] as ContactDto,
    loading: false,
    error: null
};

export function contactsReducer(state = initialState, action: ContactActions) {
    switch (action.type) {
        case GET_CONTACTS_ACTION:
            return {
                ...state,
                loading: true,
                error: null
            };

        case GET_CONTACTS_SUCCESS:
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