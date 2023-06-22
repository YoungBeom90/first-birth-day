import styled from "styled-components";
import {GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import maker from '../assets/images/marker.png';
import { CopyToClipboard } from "react-copy-to-clipboard";
import {Link} from "react-router-dom";

const containerStyle = {
    width: '95%',
    height: '400px',
    marginLeft: '2%',
    borderRadius: '3%'
};

const center = {
    lat: 37.538866,
    lng: 127.07032,
};

const markerPosition = {
    lat: 37.538198,
    lng: 127.0708471,
}

const myStyles = [
    {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
];

export const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyD8ubvQczM9QZC-erfDlqjVNuzI_BgHJjg'
    });

    return (
        <Background>
            <GoBack><LinkExtend to={'/first-birth-day'}>🔙</LinkExtend></GoBack>
            <Title>가율이 보러 오시는길</Title>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={17}
                    options={{ disableDefaultUI: true, styles: myStyles }}
                >
                    <MarkerF position={markerPosition} icon={{url: maker}}/>
                </GoogleMap>
            ) : <></>}
            <Description>
                📍서울 광진구 능동로 90
                <CopyToClipboard text={'서울 광진구 능동로 90'} onCopy={()=>alert("주소가 복사되었습니다")}>
                    <Copy>[주소복사]</Copy>
                </CopyToClipboard>
                <br/>더 클래스 500 B동 3층
                <br/>2,7호선 건대입구역 5번 출구 맞은편
            </Description>
        </Background>
    )
}

const Background = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  padding-top: 10px;
  background-color: lemonchiffon;
`

const MainFont = styled.h1`
  font-family: var(--font-googleSingleDay);
`

const Title = styled(MainFont)`
  font-size: 30px;
  text-align: center;
  color: palevioletred;
`

const Description = styled(MainFont)`
  font-size: 20px;
  text-align: center;
  color: palevioletred;
`

const Copy = styled(MainFont)`
  font-size: 18px;
  color: cornflowerblue;
  display: inline-block;
`

const GoBack = styled.h2`
  position: absolute;
  top: -1%;
  left: 5%;
  font-size: 35px;
`

const LinkExtend = styled(Link)`
  text-decoration-line: none;
`