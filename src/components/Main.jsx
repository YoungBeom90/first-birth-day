import styled from "styled-components";
import backgroundImage from '../assets/images/background.jpg';
import gaYulFaceImage from '../assets/images/ga-yul-face.png'
import {Link} from "react-router-dom";
import '../assets/css/main.css'
import React from "react";

export const Main = () => {
    return (
        <Background>
            <BackgroundImage>
                <GaYulFace/>
                <Texts>
                    <Title1>가율이의</Title1>
                    <Title2>첫번째 생일을 축하해주세요 !!</Title2>
                    <ButtonsBox>
                        <GoToGalleryButtonBox>
                            <LinkExtend to={'/gallery'}><GoToGallery>👉 돌사진 구경하기</GoToGallery></LinkExtend>
                        </GoToGalleryButtonBox>
                        <GoToMapButtonBox>
                            <LinkExtend to={'/map'}><GoToMap>👉 돌잔치 오시는길</GoToMap></LinkExtend>
                        </GoToMapButtonBox>
                    </ButtonsBox>
                </Texts>
            </BackgroundImage>
        </Background>
    )
}

const Background = styled.div`
  display: flex;
  width: 100%;
  max-width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  background-color: #E2D1C4;
  background-repeat: no-repeat;
`

const BackgroundImage = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
`

const Texts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 182px;
  
`

const GaYulFace = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${gaYulFaceImage});
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
`

const MainFont = styled.span`
  font-family: var(--font-googleSingleDay);
`

const Title1 = styled(MainFont)`
  font-size: 28px;
`

const Title2 = styled(MainFont)`
  font-size: 24px;
`

const LinkExtend = styled(Link)`
  text-decoration-line: none;
`

const ButtonsBox = styled.div`
  width: 400px;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 60px;
`

const GoToGalleryButtonBox = styled.div`
  text-align: center;
  margin-right: 10px;
  animation-duration: 2s;
  animation-name: motionUp;
  animation-iteration-count: infinite;
`
const GoToGallery = styled(MainFont)`
  font-size: 20px;
  color: palevioletred;
`

const GoToMapButtonBox = styled.div`
  text-align: center;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-name: motionUp;
  animation-iteration-count: infinite;
`
const GoToMap = styled(MainFont)`
  font-size: 20px;
  color: palevioletred;
`

