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
                    <ContentName>기도 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ContentName>
                    <ContentInfo>찬송가 155장</ContentInfo>
                    <ContentMC>김유택 목사님</ContentMC>
                </ContentBox>
            </Page>
        </Background>
    )
}

const Background = styled.div`
  height: ${window.innerHeight}px;
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
  width: 60%;
  height: 50%;
  min-width: 300px;
  margin: auto;
  padding: 30px;
  border-radius: 30px;
  background-color: whitesmoke;
`

const TopSection = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const Title = styled.h2`
  margin: 5px;
`

const ContentBox = styled.div `
  display: flex;
  justify-content: space-between;
`

const ColumnName = styled.h3`
    font-weight: bold;
`

const ColumnMC = styled.h3`
  font-weight: bold;`

const ContentName = styled.div`
  
`

const ContentInfo = styled.div``

const ContentMC = styled.div``
