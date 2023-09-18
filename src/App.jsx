import {Route, Routes} from "react-router-dom";
import React from "react";
import {Map} from "./components/Map";
import {Gallery} from "./components/Gallery";
import {Main} from "./components/Main";
import welcomeMp3 from "./assets/audio/Welcome.mp3";
import ReactPlayer from "react-player";
import {Procedure} from "./components/Procedure";
import styled from "styled-components";

function App() {
    return (
        <div className={'app'}>
            <ReactPlayer
                url={welcomeMp3}
                playing={true}
                controls={true}
                volume={0.5}
                width={'180px'}
                height={'20px'}
                style={{position: 'absolute'}}
            />
            <Routes>
                <Route path='/first-birth-day' element={<Main/>}/>
                <Route path='/first-birth-day/gallery' element={<Gallery/>}/>
                <Route path='/first-birth-day/map' element={<Map/>}/>
                <Route path='/first-birth-day/procedure' element={<Procedure/>}/>
            </Routes>
            <Footer>Copyright © 2023. GayoolDaddy. </Footer>
        </div>
    );
}

const Footer = styled.div`
  position: relative;
  transform : translateY(-100%);
  padding-bottom: 5px;
  padding-left: 10px;
  font-size: 12px;
`

export default App;
