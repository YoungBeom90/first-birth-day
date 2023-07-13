import ImageGallery from 'react-image-gallery';
import backgroundImage from '../assets/images/background-gallary.jpeg'
import image1 from '../assets/images/gallary/1.jpeg'
import image2 from '../assets/images/gallary/2.jpeg'
import image3 from '../assets/images/gallary/3.jpeg'
import image4 from '../assets/images/gallary/4.jpeg'
import image5 from '../assets/images/gallary/5.jpeg'
import image6 from '../assets/images/gallary/6.jpeg'
import image7 from '../assets/images/gallary/7.jpeg'
import image8 from '../assets/images/gallary/8.jpeg'
import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import goHomeIcon from '../assets/images/back-to-home.png'

const images = [
    {
        original: `${image1}`,
        thumbnail: `${image1}`,
        originalWidth: 200,
        originalHeight: 345,
    },
    {
        original: `${image2}`,
        thumbnail: `${image2}`,
        originalWidth: 200,
        originalHeight: 345,
    },
    {
        original: `${image3}`,
        thumbnail: `${image3}`,
        originalWidth: 200,
        originalHeight: 345,
    },
    {
        original: `${image4}`,
        thumbnail: `${image4}`,
        originalWidth: 200,
        originalHeight: 345,

    },
    {
        original: `${image5}`,
        thumbnail: `${image5}`,
        originalWidth: 200,
        originalHeight: 345,

    },
    {
        original: `${image6}`,
        thumbnail: `${image6}`,
        originalWidth: 200,
        originalHeight: 345,
    },
    {
        original: `${image7}`,
        thumbnail: `${image7}`,
        originalWidth: 200,
        originalHeight: 345,
    },
    {
        original: `${image8}`,
        thumbnail: `${image8}`,
        originalWidth: 200,
        originalHeight: 345,
    },
]

export const Gallery = () => {
    return (
        <Background>
                <Link to={'/first-birth-day'}><GoHome/></Link>
                <Contents>
                    <ImageGallery
                        items={images}
                        showThumbnails={false}
                        showBullets={true}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        autoPlay={true}
                        infinite={true}
                    />
                    <GoToMapButtonBox>
                        <LinkExtend to={'/first-birth-day/map'}><GoToMap>📍오시는길</GoToMap></LinkExtend>
                    </GoToMapButtonBox>
                </Contents>
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

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainFont = styled.h2`
  font-family: var(--font-googlePoorStory);
`

const GoHome= styled.div`
  position: absolute;
  top: 7%;
  left: 5%;
  width: 32px;
  height: 32px;
  background-image: url(${goHomeIcon});
  background-size: 100%;
`

const LinkExtend = styled(Link)`
  text-decoration-line: none;
`

const GoToMapButtonBox = styled.div`
  position: absolute;
  top: 5%;
  right: 3%;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-name: motionUp;
  animation-iteration-count: infinite;
`

const GoToMap = styled(MainFont)`
  font-size: 22px;
  color: #B66062;
`
