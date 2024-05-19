import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.svg";
import dot from "../../assets/images/dot.svg";
import search from "../../assets/images/search.svg";
import hamburger from "../../assets/images/hamburger.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
    const [isMenu, setMenu] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <Cover>
            <Container className="wrapper">
                <LeftConatiner to={"/"} data-aos="fade-down">
                    <LogoDiv>
                        <Logo src={logo} alt="logo" />
                    </LogoDiv>
                </LeftConatiner>
                <NavContainer data-aos="fade-down">
                    <List>
                        <Nav>Learn</Nav>
                        <DotContainer>
                            <Dot src={dot} alt="dot" />
                        </DotContainer>
                    </List>
                    <List>
                        <Nav>How do I participate?</Nav>
                        <DotContainer>
                            <Dot src={dot} alt="dot" />
                        </DotContainer>
                    </List>
                    <List>
                        <Nav>Universities</Nav>
                        <DotContainer>
                            <Dot src={dot} alt="dot" />
                        </DotContainer>
                    </List>
                    <List>
                        <Nav>Corporate</Nav>
                    </List>
                </NavContainer>
                <RightConatiner data-aos="fade-down">
                    <SearchContainer>
                        <SearchIcon>
                            <Icon src={search} alt="search" />
                        </SearchIcon>
                    </SearchContainer>

                    <ButtonContainer>
                        <JoinButton>Join Program</JoinButton>
                    </ButtonContainer>
                </RightConatiner>
                <Hamburger
                    onClick={() => {
                        setMenu(!isMenu);
                    }}
                    data-aos="fade-down"
                >
                    <HamburgerContainer>
                        <Icon src={hamburger} />
                    </HamburgerContainer>
                    Menu
                </Hamburger>
            </Container>
            {isMenu && <HamburgerMenu setMenu={setMenu} />}
        </Cover>
    );
}

export default Header;
const Cover = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftConatiner = styled(Link)`
    cursor: pointer;
`;
const LogoDiv = styled.div`
    width: 40px;
`;
const Logo = styled.img``;
const NavContainer = styled.div`
    display: flex;
    gap: 14px;
    @media all and (max-width: 860px) {
        display: none;
    }
`;
const List = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`;
const Nav = styled(Link)`
    font-size: 15px;
    color: #161226;
    cursor: pointer;
`;

const DotContainer = styled.div`
    width: 6px;
`;
const Dot = styled.img``;
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
const Hamburger = styled.div`
    padding: 12px 16px;
    background: #161226;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    gap: 12px;
    display: none;
    cursor: pointer;

    @media all and (max-width: 860px) {
        display: flex;
    }
`;
