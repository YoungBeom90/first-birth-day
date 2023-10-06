import styled from "styled-components";
import backgroundImage from '../assets/images/background_main.jpeg';
import goHomeIcon from '../assets/images/back-to-home.png'
import {Link} from "react-router-dom";

export const Procedure = () => {
    return (
        <Background>
            <LinkExtend to={'/first-birth-day'}>
                <GoHome />
            </LinkExtend>
            <Page>
                <TopSection>
                    <Title>✧ 식 순 ✧</Title>
                </TopSection>
                <ContentBox>
                    <ColumnName>순서</ColumnName>
                    <ColumnMC>진행</ColumnMC>
                </ContentBox>
                <ContentBox>
                    <ContentName>예배 기도</ContentName>
                    <ContentMC>김유택 목사</ContentMC>
                </ContentBox>
                <ContentBox>
                    <ContentName>찬송</ContentName>
                    <ContentInfo>565장</ContentInfo>
                    <ContentMC>다같이</ContentMC>
                </ContentBox>
                <Description>
                    <DescriptionText>1. 예수께로 가면 나는 기뻐요 걱정 근심 없고 정말 즐거워</DescriptionText>
                    <DescriptionText>(후렴) 예수께로 가면 나는 기뻐요 나와 같은 아이 부르셨어요</DescriptionText>
                    <DescriptionText>2. 예수께로 가면 맞아주시고 나를 사랑하사 용서하셔요</DescriptionText>
                    <DescriptionText>3. 예수께로 가면 손을 붙잡고 어디서나 나를 인도하셔요</DescriptionText>
                </Description>
                <ContentBox>
                    <ContentName>성경 봉독</ContentName>
                    <ContentInfo>시편 1 : 1~3</ContentInfo>
                    <ContentMC>김유택 목사</ContentMC>
                </ContentBox>
                <Description>
                    <DescriptionText>1 복 있는 사람은 악인들의 꾀를 따르지 아니하며 죄인들의 길에 서지 아니하며 오만한 자들의 자리에 앉지 아니하고</DescriptionText>
                    <DescriptionText>2 오직 여호와의 율법을 즐거워하여 그의 율법을 주야로 묵상하는 도다</DescriptionText>
                    <DescriptionText>3 그는 시냇가에 심은 나무가 철을 따라 열매를 맺으며 그 잎사귀가 마르지 아니함 같으니 그가 하는 모든 일이 다 형통하리로다</DescriptionText>
                </Description>
                <ContentBox>
                    <ContentName>설교</ContentName>
                    <ContentInfo>예수님처럼 자라나는 아이</ContentInfo>
                    <ContentMC>김유택 목사</ContentMC>
                </ContentBox>
                <ContentBox>
                    <ContentName>축복송</ContentName>
                    <ContentInfo>너는 시냇가에 심은 나무라</ContentInfo>
                    <ContentMC>다같이</ContentMC>
                </ContentBox>
                <Description>
                    <DescriptionText>너는 시냇가에 심은 나무라</DescriptionText>
                    <DescriptionText>하나님의 사랑 안에 믿음 뿌리 내리고</DescriptionText>
                    <DescriptionText>주의 뜻대로 주의 뜻대로 항상 살리라</DescriptionText>
                </Description>
                <ContentBox>
                    <ContentName>축도</ContentName>
                    <ContentMC>김유택 목사</ContentMC>
                </ContentBox>
            </Page>
        </Background>
    )
}

const Background = styled.div`
  height: auto;
  min-height: ${window.innerHeight}px;
  margin: 0;
  display: flex;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  font-family: var(--font-googleGowunDodum);
`

const LinkExtend = styled(Link)`
  text-decoration-line: none;
`

const GoHome = styled.div`
  position: absolute;
  top: 7%;
  left: 5%;
  width: 32px;
  height: 32px;
  background-image: url(${goHomeIcon});
  background-size: 100%;
`

const Page = styled.div`
  width: 100%;
  height: auto;
  margin: 28% 5% 10% 5%;
  padding: 5%;
  border-radius: 10px;
  background-color: whitesmoke;
`

const TopSection = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.text`
  font-size: 130%;
  font-weight: bold;
`

const ContentBox = styled.div `
  display: flex;
  justify-content: space-between;
`

const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
`

const DescriptionText = styled.text`
  padding: 0 30px 0 30px;
  font-size: 80%;
  font-weight: bold;
`

const ColumnName = styled.text`
  font-size: 110%;
  font-weight: bold;
  margin: 5% 0;
`

const ColumnMC = styled.text`
  font-size: 110%;
  font-weight: bold;
  margin: 5% 0;
`

const ContentName = styled.div`
  font-size: 100%;
`

const ContentInfo = styled.div`
  font-size: 90%;
`

const ContentMC = styled.div`
  font-size: 100%;
`
