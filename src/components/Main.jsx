import styled from "styled-components";
import backgroundImage from '../assets/images/background_main.jpeg';
import gaYulFaceImage from '../assets/images/gayul-face2.png'
import faceFrame from '../assets/images/face-frame.png'
import {Link} from "react-router-dom";
import '../assets/css/main.css'
import React from "react";


export const Main = () => {
    return (
        <Background>
            <Texts>
                <Title1>가율이의</Title1>
                <Title2>첫번째 생일을 축하해주세요 !!</Title2>
            </Texts>
            <FaceSection>
                <GaYulFace/>
                <FaceFrame />
            </FaceSection>
            <ButtonsBox>
                <GoToGalleryButtonBox>
                    <LinkExtend to={'/first-birth-day/gallery'}><GoToGallery>📸 사진 구경하기</GoToGallery></LinkExtend>
                </GoToGalleryButtonBox>
                <GoToMapButtonBox>
                    <LinkExtend to={'/first-birth-day/map'}><GoToMap>📍오시는길</GoToMap></LinkExtend>
                </GoToMapButtonBox>
            </ButtonsBox>
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

const Texts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;  
`
const FaceSection = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  margin-top: 40px;
`

const GaYulFace = styled.div`
  width: 300px;
  height: 75%;
  background-image: url(${gaYulFaceImage});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 100%;
  margin: 40px 0 0 25px;
`

const FaceFrame = styled.div`
  width: 300px;
  height: 40%;
  background-image: url(${faceFrame});
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
`

const MainFont = styled.span`
  font-family: var(--font-googlePoorStory);
  margin: 5px;
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
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
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

