import React from "react";
import styled from "styled-components";
import person from "../../assets/images/card2.svg";
import gradient from "../../assets/images/gradient.svg";

function Ebook() {
    return (
        <Card>
            <Top>
                <ImgContainer>
                    <Img src={person} />
                </ImgContainer>
                <Name>E-BOOK</Name>
            </Top>
            <Bottom>
                <Heading>
                    Charting Paths:Program Through a <span>Student's</span> Eyes{" "}
                </Heading>
                <LoadButton>Get the guide</LoadButton>
            </Bottom>
        </Card>
    );
}

export default Ebook;
const Card = styled.div`
    background: url(${gradient});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    padding: 44px 38px 82px 38px;
`;
const ImgContainer = styled.div`
    width: 100%;
`;
const Top = styled.div`
    margin-bottom: 12px;
`;
const Bottom = styled.div``;
const Heading = styled.h1`
    font-family: georgia_light;
    font-size: 20px;
    font-weight: 400;
    line-height: 45px;
    text-align: center;
    line-height: 32px;
    color: #fff;
    margin-bottom: 27px;

    span {
        font-family: georgia_light_italic;
    }
`;
const Name = styled.h3`
    font-size: 13px;
    color: #fff;
    font-family: "public_sans_extra_light";
    font-weight: 300;
    text-transform: capitalize;
    text-align: center;
`;
const Img = styled.img``;
const LoadButton = styled.button`
    padding: 12px 25px;
    border: 1px solid #fff9e3;
    border-radius: 30px;
    display: flex;
    gap: 4px;
    color: #fff9e3;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin: 0 auto;
`;
