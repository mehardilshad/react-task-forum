import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import hamburger from "../../assets/images/hamburger.svg";
import chat from "../../assets/images/chat-black.svg";

import AOS from "aos";
import "aos/dist/aos.css";

function SubHeader() {
    const [isMenu, setMenu] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Only animate once
        });
    }, []);
    return (
        <Cover data-aos="fade-down">
            <Container>
                <LeftConatiner>
                    <LogoDiv>
                        <Logo src={logo} alt="logo" />
                    </LogoDiv>
                </LeftConatiner>
                <CenterContainer>
                    <Hamburger
                        onClick={() => {
                            setMenu(!isMenu);
                        }}
                    >
                        <HamburgerContainer>
                            <Icon src={hamburger} />
                        </HamburgerContainer>
                        Menu
                    </Hamburger>
                    <GradientContainer>
                        <Left>
                            <IconContainer>
                                <Icon src={chat} alt="chat" />
                            </IconContainer>
                            <Text>Discuss CPT</Text>
                        </Left>
                    </GradientContainer>
                </CenterContainer>

                <RightConatiner>
                    <SearchContainer>
                        <SearchIcon>
                            <Icon src={search} alt="search" />
                        </SearchIcon>
                    </SearchContainer>

                    <ButtonContainer>
                        <JoinButton>Join Program</JoinButton>
                    </ButtonContainer>
                </RightConatiner>
            </Container>
        </Cover>
    );
}

export default SubHeader;
const Cover = styled.div`
    padding: 12px 25px;
    border: 1px solid #e8e8e8;
    width: 70%;
    margin: 0 auto;
    border-radius: 15px;
    margin-top: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 999999999;
    @media all and (max-width: 340px) {
        width: 85%;
    }
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftConatiner = styled.div``;
const LogoDiv = styled.div`
    width: 40px;
`;
const Logo = styled.img``;
const CenterContainer = styled.div`
    display: flex;
    gap: 14px;
`;

const RightConatiner = styled.div`
    display: flex;
    align-items: center;
    @media all and (max-width: 860px) {
        display: none;
    }
`;

const SearchContainer = styled.div`
    width: 50px;
    padding: 10px;
    background: #161226;
    border-radius: 30px;
`;
const ButtonContainer = styled.div`
    padding: 15px 30px;
    background: #161226;
    border-radius: 30px;
    transform: translateX(-2px);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SearchIcon = styled.div`
    width: 30px;
    padding: 8px;
    background: #ffffff;
    border-radius: 30px;
`;
const JoinButton = styled.button`
    color: #fff9e3;
`;
const Icon = styled.img`
    display: block;
    width: 100%;
`;
const HamburgerContainer = styled.div``;
const GradientContainer = styled.div`
    background: linear-gradient(to right, #0779e6, #f2265c);
    padding: 3px;
    border-radius: 30px;
    cursor: pointer;
`;
const Hamburger = styled.div`
    padding: 12px 16px;
    background: #161226;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    gap: 12px;
    cursor: pointer;
    @media all and (max-width: 860px) {
        display: none;
    }
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fff;
    padding: 10px 20px;
    border-radius: 20px;
`;

const IconContainer = styled.div`
    width: 20px;
`;

const Text = styled.p`
    font-size: 13px;
    color: #0a090e;
    font-family: "public_sans";
    font-weight: 400;
    text-transform: uppercase;
    @media all and (max-width: 480px) {
        font-size: 10px;
    }
`;
