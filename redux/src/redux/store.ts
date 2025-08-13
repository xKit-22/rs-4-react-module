import { createStore, combineReducers, applyMiddleware } from "redux";
import { logActionMiddleware } from "./logActionMiddleware";
import { groupContactsReducer } from "./groupContactsReducer";
import { favoriteContactsReducer } from "./favoriteContactsReducer";
import { contactsReducer } from "./contactsReducer";
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Middleware } from 'redux';

const rootReducer = persistReducer(
    { key: 'redux', storage, throttle: 100000 },
    combineReducers({
        contacts: contactsReducer,
        group: groupContactsReducer,
        favorite: favoriteContactsReducer
    })
);

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as Middleware, logActionMiddleware)
);

export const persistor = persistStore(store);

// @ts-ignore
window.persistor = persistor;

// Единственное объявление RootState
export type RootState = ReturnType<typeof rootReducer>;