import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";
import {DATA_CONTACT, DATA_GROUP_CONTACT} from 'src/__data__';

export const GET_CONTACTS_ACTION = 'GET_CONTACTS_ACTION';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
export const GET_GROUP_CONTACTS_ACTION = 'GET_GROUP_CONTACTS_ACTION';
export const GET_GROUP_CONTACTS_SUCCESS = 'GET_GROUP_CONTACTS_SUCCESS';
export const GET_FAVORITE_CONTACTS_ACTION = 'GET_FAVORITE_CONTACTS_ACTION';
export const GET_FAVORITE_CONTACTS_SUCCESS = 'GET_FAVORITE_CONTACTS_SUCCESS';
export const GET_FAILED_ACTION = 'GET_FAILED_ACTION';

interface GetContactsAction {
    type: typeof GET_CONTACTS_ACTION;
}

interface GetContactsSuccessAction {
    type: typeof GET_CONTACTS_SUCCESS;
    payload: typeof DATA_CONTACT;
}

interface GetGroupContactsAction {
    type: typeof GET_GROUP_CONTACTS_ACTION;
}

interface GetGroupContactsSuccessAction {
    type: typeof GET_GROUP_CONTACTS_SUCCESS;
    payload: typeof DATA_GROUP_CONTACT;
}

interface GetFavoriteContactsAction {
    type: typeof GET_FAVORITE_CONTACTS_ACTION;
}

interface GetFavoriteContactsSuccessAction {
    type: typeof GET_FAVORITE_CONTACTS_SUCCESS;
    payload: string[]; // массив ID избранных контактов
}

interface GetFailedAction {
    type: typeof GET_FAILED_ACTION;
    error: string;
}

export function getContactsAction(): ThunkAction<void, RootState, void, ContactActions> {
    return async (dispatch) => {
        dispatch({ type: GET_CONTACTS_ACTION });

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            dispatch({
                type: GET_CONTACTS_SUCCESS,
                payload: DATA_CONTACT
            });
        } catch (error) {
            dispatch({
                type: GET_FAILED_ACTION,
                error: 'Failed to load contacts'
            });
        }
    }
}

export function getGroupContactsAction(): ThunkAction<void, RootState, void, ContactActions> {
    return async (dispatch) => {
        dispatch({ type: GET_GROUP_CONTACTS_ACTION });

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            dispatch({
                type: GET_GROUP_CONTACTS_SUCCESS,
                payload: DATA_GROUP_CONTACT
            });
        } catch (error) {
            dispatch({
                type: GET_FAILED_ACTION,
                error: 'Failed to load groups'
            });
        }
    }
}

export function getFavoriteContactsAction(): ThunkAction<void, RootState, void, ContactActions> {
    return async (dispatch) => {
        dispatch({ type: GET_FAVORITE_CONTACTS_ACTION });

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            const favoriteIds = [
                DATA_CONTACT[0].id,
                DATA_CONTACT[1].id,
                DATA_CONTACT[2].id,
                DATA_CONTACT[3].id
            ];
            dispatch({
                type: GET_FAVORITE_CONTACTS_SUCCESS,
                payload: favoriteIds
            });
        } catch (error) {
            dispatch({
                type: GET_FAILED_ACTION,
                error: 'Failed to load favorites'
            });
        }
    }
}

export type ContactActions =
    | GetContactsAction
    | GetContactsSuccessAction
    | GetGroupContactsAction
    | GetGroupContactsSuccessAction
    | GetFavoriteContactsAction
    | GetFavoriteContactsSuccessAction
    | GetFailedAction;