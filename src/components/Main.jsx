import styled from "styled-components";
import backgroundImage from '../assets/images/background.jpg';
import gaYulFaceImage from '../assets/images/ga-yul-face.png'
import {Link} from "react-router-dom";
import '../assets/css/main.css'
import React from "react";

export const Main = () => {
    return (
        <Background>
            <MainImage>
                <GaYulFace/>
                <Texts>
                    <Title1>가율이의</Title1>
                    <Title2>첫번째 생일을 축하해주세요 !!</Title2>
                    <ButtonsBox>
                        <GoToGalleryButtonBox>
                            <LinkExtend to={'/gallery'}><GoToGallery>👉 돌사진 구경하기</GoToGallery></LinkExtend>
                        </GoToGalleryButtonBox>
                        <GoToMapButtonBox>
                            <LinkExtend to={'/gallery'}><GoToMap>👉 돌잔치 오시는길</GoToMap></LinkExtend>
                        </GoToMapButtonBox>
                    </ButtonsBox>
                </Texts>
            </MainImage>
        </Background>
    )
}

const Background = styled.div`
  padding: 10px;
  display: inline-flex;
  width: 95%;
  height: ${window.innerHeight + 20}px;
  background-color: #E2D1C4;
  background-repeat: round;
`

const MainImage = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100%;
`

const Texts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

`

const GaYulFace = styled.div`
  margin-top: 50%;
  margin-bottom: 35%;
  width: 50%;
  height: 230px;
  background-image: url(${gaYulFaceImage});
  background-size: 100%;
  background-repeat: no-repeat;
`

const MainFont = styled.span`
  font-family: var(--font-googleSingleDay);
`

const Title1 = styled(MainFont)`
  font-size: 28px;
`

const Title2 = styled(MainFont)`
  font-size: 24px
`

const LinkExtend = styled(Link)`
  text-decoration-line: none;
`

const ButtonsBox = styled.div`
  display: flex;
`

const GoToGalleryButtonBox = styled.div`
  text-align: center;
  margin: 0 0 10px 10px;
  animation-duration: 2s;
  animation-name: motion;
  animation-iteration-count: infinite;
`
const GoToGallery = styled(MainFont)`
  font-size: 20px;
  color: palevioletred;
`

const GoToMapButtonBox = styled.div`
  text-align: center;
  margin: 0 0 10px 10px;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-name: motion;
  animation-iteration-count: infinite;
`
const GoToMap = styled(MainFont)`
  font-size: 20px;
  color: palevioletred;
`

