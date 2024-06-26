import React, { useEffect } from "react";
import styled from "styled-components";
import chat from "../../assets/images/chat-icon.svg";
import gradient from "../../assets/images/gradient.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function MostSearched() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Only animate once
        });
    }, []);
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
                <CardContainer data-aos="fade-up">
                    <Card>Elibility</Card>
                </CardContainer>
                <CardContainer data-aos="fade-up">
                    <Card>F1 Visa Students</Card>
                </CardContainer>
                <CardContainer data-aos="fade-up">
                    <Card>Universities</Card>
                </CardContainer>
                <CardContainer data-aos="fade-up">
                    <Card>Admission</Card>
                </CardContainer>
                <CardContainer data-aos="fade-up">
                    <Card>Companies</Card>
                </CardContainer>
                <CardContainer data-aos="fade-up">
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
    @media all and (max-width: 1180px) {
        grid-template-columns: 1fr 1fr;
    }
    @media all and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
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
    font-family: "public_sans_extra_light";
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
    @media all and (max-width: 640px) {
        font-size: 32px;
    }
`;
const CardContainer = styled.div`
    width: 325px;
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
    @media all and (max-width: 768px) {
        width: 450px;
        height: 200px;
    }
    @media all and (max-width: 640px) {
        width: 380px;
        height: 185px;
    }
    @media all and (max-width: 480px) {
        width: 325px;
        height: 145px;
    }
    @media all and (max-width: 360px) {
        width: 250px;
    }
`;
const Card = styled.div`
    font-family: georgia;
    font-size: 24px;
    font-weight: 400;
    color: #ffffff;
    @media all and (max-width: 360px) {
        font-size: 20px;
    }
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
