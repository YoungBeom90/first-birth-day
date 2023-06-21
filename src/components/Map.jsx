import styled from "styled-components";
import {GoogleMap, MarkerF, useJsApiLoader} from "@react-google-maps/api";
import maker from '../assets/images/marker.png'

const containerStyle = {
    width: window.innerWidth,
    height: '400px'
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
        <div>
            <MainFont/>
            <h1>지도</h1>
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
        </div>
    )
}

const MainFont = styled.span`
  font-family: var(--font-googleSingleDay);
`