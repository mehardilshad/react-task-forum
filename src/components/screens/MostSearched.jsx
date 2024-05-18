import React from "react";
import styled from "styled-components";
import chat from "../../assets/images/chat-icon.svg";
import gradient from "../../assets/images/gradient.svg";

function MostSearched() {
    return (
        <Container>
            <Top>
                <Title>TOPICS</Title>
                <Heading>
                    {" "}
                    Most Searched <span>Ones</span>{" "}
                </Heading>
            </Top>
            <Middle>
                <CardContainer>
                    <Card>Elibility</Card>
                </CardContainer>
                <CardContainer>
                    <Card>F1 Visa Students</Card>
                </CardContainer>
                <CardContainer>
                    <Card>Universities</Card>
                </CardContainer>
                <CardContainer>
                    <Card>Admission</Card>
                </CardContainer>
                <CardContainer>
                    <Card>Companies</Card>
                </CardContainer>
                <CardContainer>
                    <Card>Jobs</Card>
                </CardContainer>
            </Middle>
            <Bottom>
                <Left>
                    <Content>Didn’t find your topic?</Content>
                </Left>
                <Right>
                    <IconContainer>
                        <Icon src={chat} alt="chat" />
                    </IconContainer>
                    <Text>Start discussing</Text>
                </Right>
            </Bottom>
        </Container>
    );
}

export default MostSearched;
const Container = styled.div`
    padding: 100px 0;
    background: #fff9e3;
`;
const Top = styled.div`
    text-align: center;
    margin-bottom: 42px;
`;
const Middle = styled.div`
    width: max-content;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 28px;
    margin-bottom: 60px;
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    justify-content: center;
`;
const Content = styled.div`
    color: #0a090e;
    font-size: 16px;
    font-family: "public_sans";
    font-weight: 400;
`;
const Title = styled.div`
    font-size: 13px;
    color: #0a090e;
    font-family: "public_sans";
    font-weight: 300;
    text-transform: capitalize;
    margin-bottom: 6px;
`;
const Heading = styled.h1`
    font-family: georgia;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    margin-bottom: 12px;
    span {
        font-family: georgia_italic;
    }
`;
const CardContainer = styled.div`
    width: 322px;
    height: 145px;
    background: #161226;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background: url(${gradient});
        background-size: cover;
        background-repeat: no-repeat;
    }
`;
const Card = styled.div`
    font-family: georgia;
    font-size: 24px;
    font-weight: 400;
    color: #ffffff;
`;
const IconContainer = styled.div`
    width: 20px;
`;
const Icon = styled.img``;
const Text = styled.h1`
    font-family: georgia_italic;
    font-size: 15px;
    font-weight: 400;
`;
const Left = styled.div``;
const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;
