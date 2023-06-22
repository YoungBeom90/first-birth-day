import {Route, Routes} from "react-router-dom";
import React from "react";
import {Map} from "./components/Map";
import {Gallery} from "./components/Gallery";
import {Main} from "./components/Main";

function App() {
    return (
        <div className={'app'}>
            <Routes>
                <Route path='/first-birth-day' element={<Main/>}/>
                <Route path='/first-birth-day/gallery' element={<Gallery/>}/>
                <Route path='/first-birth-day/map' element={<Map/>}/>
            </Routes>
        </div>
    );
}

export default App;
