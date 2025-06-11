import Header from "./components/Header/Header.tsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import List from "./pages/List/List.tsx";
import charactersData from '././consts/characters.json'
import episodesData from '././consts/episode.json'
import locationsData from '././consts/location.json'
import Details from "./pages/Details/Details.tsx";
import Page404 from "./pages/Page404/page404.tsx";

function App() {
    const location = useLocation();

    const is404Page = location.pathname !== '/' &&
        !['/characters', '/episodes', '/locations'].some(path => location.pathname.startsWith(path));

    return (
        <div className={'container'}>
            {!is404Page && <Header />}
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/characters" element={<List data={charactersData} />} />
                <Route path="/characters/:id" element={<Details data={charactersData} />} />
                <Route path="/episodes" element={<List data={episodesData} />} />
                <Route path="/episodes/:id" element={<Details data={episodesData} />} />
                <Route path="/locations" element={<List data={locationsData} />} />
                <Route path="/locations/:id" element={<Details data={locationsData} />} />
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </div>
    )
}

export default App
