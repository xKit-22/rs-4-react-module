import React, {useEffect} from 'react';
import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Layout} from 'src/components/Layout';
import {ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage} from 'src/pages';
import {useAppDispatch} from "src/redux/hooks";
import {Provider} from "react-redux";
import {persistor, store} from "src/redux/store";
import {PersistGate} from 'redux-persist/integration/react';
import {getContactsAction, getFavoriteContactsAction, getGroupContactsAction} from "src/redux/actions";

export const MainApp = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getContactsAction())
        dispatch(getGroupContactsAction())
        dispatch(getFavoriteContactsAction())
    }, [])

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
                <ThemeProvider
                    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                    minBreakpoint="xxs"
                >
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout/>}>
                                <Route index element={
                                    <ContactListPage/>
                                }/>
                                <Route path="contact">
                                    <Route index element={
                                        <ContactListPage/>
                                    }/>
                                    <Route path=":contactId" element={
                                        <ContactPage/>
                                    }/>
                                </Route>
                                <Route path="groups">
                                    <Route index element={
                                        <GroupListPage/>
                                    }/>
                                    <Route path=":groupId" element={
                                        <GroupPage/>
                                    }/>
                                </Route>
                                <Route path="favorit" element={
                                    <FavoritListPage/>
                                }/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};
