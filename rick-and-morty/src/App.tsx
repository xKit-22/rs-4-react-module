import Header from "./components/Header/Header.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import charactersData from '././consts/characters.json'
import episodesData from '././consts/episode.json'
import locationsData from '././consts/location.json'
import Page404 from "./pages/Page404/page404.tsx";
import {AuthProvider} from "./context/AuthProvider.tsx";
import Login from "./pages/Login/Login.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import {lazy, Suspense} from "react";

const List = lazy(() => import('./pages/List/List.tsx'))
const Details = lazy(() => import('./pages/Details/Details.tsx'))

function App() {
    const location = useLocation();

    const isHeaderVisible = location.pathname == '/' ||
        ['/characters', '/episodes', '/locations'].some(path => location.pathname.startsWith(path));

    return (
        <div className={'container'}>
            <AuthProvider>
                {isHeaderVisible && <Header/>}
                <Routes>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>
                    <Route
                        path="/characters"
                        element={
                            <PrivateRoute>
                                <Suspense fallback={<div>Loading...</div>}>
                                    <List url={'https://rickandmortyapi.com/api/character'}/>
                                </Suspense>
                            </PrivateRoute>
                        }
                    />
                    <Route path="/characters/:id"
                           element={
                               <PrivateRoute>
                                   <Suspense fallback={<div>Loading...</div>}>
                                       <Details data={charactersData}/>
                                   </Suspense>
                               </PrivateRoute>
                           }
                    />
                    <Route path="/episodes"
                           element={
                               <PrivateRoute>
                                   <Suspense fallback={<div>Loading...</div>}>
                                       <List url={'https://rickandmortyapi.com/api/episode'}/>
                                   </Suspense>
                               </PrivateRoute>
                           }
                    />
                    <Route path="/episodes/:id"
                           element={
                               <PrivateRoute>
                                   <Suspense fallback={<div>Loading...</div>}>
                                       <Details data={episodesData}/>
                                   </Suspense>
                               </PrivateRoute>
                           }
                    />
                    <Route path="/locations"
                           element={
                               <PrivateRoute>
                                   <Suspense fallback={<div>Loading...</div>}>
                                       <List url={'https://rickandmortyapi.com/api/location'}/>
                                   </Suspense>
                               </PrivateRoute>
                           }
                    />
                    <Route path="/locations/:id"
                           element={
                               <PrivateRoute>
                                   <Suspense fallback={<div>Loading...</div>}>
                                       <Details data={locationsData}/>
                                   </Suspense>
                               </PrivateRoute>}
                    />
                    <Route path='*' element={<Page404/>}/>
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App
