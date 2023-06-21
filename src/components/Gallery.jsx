import ImageGallery from 'react-image-gallery';
import backgroundImage from '../assets/images/background2.jpeg'
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
            <Link to={'/'}><GoBack>🔙</GoBack></Link>
            <Contents>
                {/*<Title>가율's 갤러리</Title>*/}
                <ImageGallery
                    items={images}
                    showThumbnails={false}
                    showBullets={true}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    // autoPlay={true}
                    infinite={false}
                />
            </Contents>
            <GoToMapButtonBox>
                <LinkExtend to={'/gallery'}><GoToMap>👉돌잔치 오시는길</GoToMap></LinkExtend>
            </GoToMapButtonBox>
        </Background>
    )
}

const Background = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  background-image: url(${backgroundImage});
  background-size: 100%;
  background-repeat: no-repeat;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  padding-top: 100px;

`

const MainFont = styled.span`
  font-family: var(--font-googleSingleDay);
`

// const Title = styled(MainFont)`
//   font-size: 25px;
//   padding-top: 100px;
//   color: palevioletred;
// `

const GoBack = styled.h2`
  position: absolute;
  left: 20px;
  font-size: 30px;
`

const GoToMapButtonBox = styled.div`
  text-align: center;
  margin: 0 0 10px 10px;
  padding-top: 150px;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-name: motion;
  animation-iteration-count: infinite;`

const LinkExtend = styled(Link)`
  text-decoration-line: none;
  //position: absolute;
  //top: 6%;
  //right: 7%;
`

const GoToMap = styled(MainFont)`
  font-size: 20px;
  color: #75827B;
`
