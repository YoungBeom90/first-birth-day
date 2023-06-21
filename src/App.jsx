import {Route, Routes} from "react-router-dom";
import React from "react";
import {Map} from "./components/Map";
import {Gallery} from "./components/Gallery";
import {Main} from "./components/Main";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/gallery' element={<Map/>}/>
      </Routes>
  );
}

export default App;
