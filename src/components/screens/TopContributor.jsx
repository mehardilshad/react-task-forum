import React from "react";
import styled from "styled-components";
import person from "../../assets/images/card1.svg";
import gradient from "../../assets/images/gradient.svg";

function TopContributor() {
    return (
        <Card>
            <Top>
                <Heading>
                    Top Contributor
                    <br /> <span>this week</span>
                </Heading>
                <ImgContainer>
                    <Img src={person} />
                </ImgContainer>
                <Name>Jishnu Ambadi</Name>
            </Top>
            <Bottom>
                <Text>
                    You can be next one! Be a part of USA’s 1st CPT Program
                    Directory!
                </Text>
                <JoinButton>Join Community & Ask</JoinButton>
            </Bottom>
        </Card>
    );
}

export default TopContributor;
const Card = styled.div`
    background: #ffeade;
    border-radius: 5px;
`;
const ImgContainer = styled.div`
    width: 100%;
`;
const Top = styled.div`
    border-bottom: 1px solid #e4c9bb;
    padding: 45px 35px;
`;
const Bottom = styled.div`
    padding: 28px 45px 32px 45px;
`;
const Heading = styled.h1`
    font-family: georgia_light;
    font-size: 24px;
    font-weight: 400;
    line-height: 45px;
    text-align: center;
    line-height: 32px;
    span {
        font-family: georgia_light_italic;
    }
`;
const Name = styled.h3`
    font-family: "public_sans_light";
    font-weight: 500;
    font-size: 20px;
    color: #0a090e;
    text-align: center;
`;
const Text = styled.h3`
    text-align: left;
    font-family: "public_sans_light";
    font-size: 16px;
    color: #0a090e;
    line-height: 23px;
    margin-bottom: 22px;
`;
const Img = styled.img``;
const JoinButton = styled.div`
    padding: 12px 32px;
    background: url(${gradient});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -62px;
    border-radius: 30px;
    display: flex;
    gap: 4px;
    width: max-content;
    justify-content: center;
    align-items: center;
    color: #fff9e3;
    font-family: "public_sans";
    font-weight: 500;
    font-size: 14px;
    margin: 0 auto;
`;
