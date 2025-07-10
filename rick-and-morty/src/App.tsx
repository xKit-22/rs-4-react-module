import Header from "./components/Header/Header.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import List from "./pages/List/List.tsx";
import charactersData from '././consts/characters.json'
import episodesData from '././consts/episode.json'
import locationsData from '././consts/location.json'
import Details from "./pages/Details/Details.tsx";
import Page404 from "./pages/Page404/page404.tsx";
import {AuthProvider} from "./context/AuthProvider.tsx";
import Login from "./pages/Login/Login.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

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
                    <Route path="/characters" element={<PrivateRoute><List data={charactersData}/></PrivateRoute>}/>
                    <Route path="/characters/:id" element={<PrivateRoute><Details data={charactersData}/></PrivateRoute>}/>
                    <Route path="/episodes" element={<PrivateRoute><List data={episodesData}/></PrivateRoute>}/>
                    <Route path="/episodes/:id" element={<PrivateRoute><Details data={episodesData}/></PrivateRoute>}/>
                    <Route path="/locations" element={<PrivateRoute><List data={locationsData}/></PrivateRoute>}/>
                    <Route path="/locations/:id" element={<PrivateRoute><Details data={locationsData}/></PrivateRoute>}/>
                    <Route path='*' element={<Page404/>}/>
                </Routes>
            </AuthProvider>
        </div>
    )
}

export default App
