import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import close from "../../assets/images/close.svg";
import logo from "../../assets/images/logo.svg";

function HamburgerMenu({ setMenu }) {
    return (
        <Cover data-aos="fade-down">
            <Container className="wrapper">
                <LeftConatiner data-aos="fade-down">
                    <LogoDiv to={"/"}>
                        <Logo src={logo} alt="logo" />
                    </LogoDiv>
                    <HamburgerContainer onClick={() => setMenu(false)}>
                        <Icon src={close} />
                    </HamburgerContainer>
                </LeftConatiner>
                <NavContainer>
                    <Nav onClick={() => setMenu(false)}>Learn</Nav>
                    <Nav onClick={() => setMenu(false)}>
                        How do I participate?
                    </Nav>
                    <Nav onClick={() => setMenu(false)}>Universities</Nav>
                    <Nav onClick={() => setMenu(false)}>Corporate</Nav>
                </NavContainer>
            </Container>
        </Cover>
    );
}

export default HamburgerMenu;

const Cover = styled.div`
    padding: 20px 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    background: #fff;
    z-index: 1003;
    top: 0;
`;
const Container = styled.div`
    padding: 20px;
`;

const Logo = styled.img``;
const NavContainer = styled.ul``;
const Nav = styled(Link)`
    font-size: 22px;
    color: #161226;
    cursor: pointer;
    margin-bottom: 30px;
    text-align: center;
`;

const Icon = styled.img`
    display: block;
    width: 100%;
`;
const HamburgerContainer = styled.div`
    width: 30px;
    cursor: pointer;
`;
const LeftConatiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;
const LogoDiv = styled(Link)`
    width: 30px;
`;
