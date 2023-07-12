import styled from "styled-components";
import {GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import maker from '../assets/images/marker.png';
import { CopyToClipboard } from "react-copy-to-clipboard";
import {Link} from "react-router-dom";
import naverMapIcon from '../assets/images/naver_map.gif';
import kakaoMapIcon from '../assets/images/kakao_map.gif';
import copyIcon from '../assets/images/copy.png';
import backgroundImage from '../assets/images/background_main.jpeg'

const containerStyle = {
    width: '90%',
    height: '300px',
    maxWidth: '500px',
    borderRadius: '3%',
    border: '2px solid black',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '80px'
};

const center = {
    lat: 37.538866,
    lng: 127.07032,
};

const markerPosition = {
    lat: 37.538198,
    lng: 127.0708471,
}

const mapCustomStyle = [
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
            {/*<Title>가율이 보러 오시는길</Title>*/}
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={17}
                    options={{ disableDefaultUI: true, styles: mapCustomStyle }}
                >
                    <MarkerF position={markerPosition} icon={{url: maker}}/>
                </GoogleMap>
            ) : <></>}
            <Description>
                <TextGroup>
                    <Address>
                        <span>📍서울 광진구 능동로 90&nbsp;</span>
                        <CopyToClipboard text={'서울 광진구 능동로 90'} onCopy={()=>alert("주소가 복사되었습니다")}>
                            <CopyButton />
                        </CopyToClipboard>
                    </Address>
                    <AppButtons>
                        <NaverAppButton href={`nmap://search?query=${encodeURI('더 클래식 500 라구뜨')}`} />
                        <KakaoAppButton href={`kakaomap://search?q=${encodeURI('더 클래식 500 라구뜨')}`}/>
                    </AppButtons><br/>
                    <span>더 클래스 500 B동 3층</span><br/>
                    <span>2,7호선 건대입구역</span><br/>
                    <span>5번 출구 맞은편에 있습니다. 😍</span>
                </TextGroup>
            </Description>
        </Background>
    )
}

const Background = styled.div`
  width: 100%;
  height: ${window.innerHeight}px;
  max-width: ${window.innerWidth}px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
`

const MainFont = styled.h1`
  font-family: var(--font-googleGamjaFlower);
`

// const MainFont2 = styled.h1`
//   font-family: var(--font-googleHiMelody);
// `

// const Title = styled(MainFont2)`
//   font-size: 30px;
//   text-align: center;
//   color: midnightblue;
// `

const Address = styled.div`
  margin-bottom: 22px;
`

const Description = styled(MainFont)`
  width: 95%;
  height: 260px;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  position: relative;
  z-index: 1;
  
  ::after {
    width: 95%;
    height: 260px;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    content: "";
    background: whitesmoke;
    position: absolute;
    top: -10px;
    left: 2%;
    border-radius: 20px;
    z-index: -1;
    opacity: 0.4;
  }
`

const TextGroup = styled(MainFont)`
  font-size: 22px;
  text-align: center;
  color: darkslateblue;
`

const CopyButton = styled.a`
  width: 23px;
  height: 23px;
  display: inline-block;
  background-image: url(${copyIcon});
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
`

const GoBack = styled.h2`
  position: absolute;
  top: 1%;
  left: 3%;
  font-size: 35px;
`

const LinkExtend = styled(Link)`
  text-decoration-line: none;
`

const AppButtons = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NaverAppButton = styled.a`
  width: 60px;
  height: 60px;
  background-size: 100%;
  background-image: url(${naverMapIcon});
  background-repeat: no-repeat;
  position: relative;
  left: -20px;
`

const KakaoAppButton = styled.a`
  width: 60px;
  height: 60px;
  background-size: 100%;
  background-image: url(${kakaoMapIcon});
  background-repeat: no-repeat;
  position: relative;
  right: -20px;
`
