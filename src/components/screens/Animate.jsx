import React, { useState } from "react";
import styled from "styled-components";
import search from "../../assets/images/search.svg";

function AnimatedButtonContainer() {
    const [showButton, setShowButton] = useState(false);

    const toggleButton = () => {
        setShowButton((prev) => !prev);
    };

    return (
        <Container>
            <SearchContainer showButton={showButton}>
                <SearchIcon src={search} alt="search" />
            </SearchContainer>
            <ButtonContainer showButton={showButton}>
                <JoinButton onClick={toggleButton}>Join Program</JoinButton>
            </ButtonContainer>
        </Container>
    );
}

export default AnimatedButtonContainer;

const Container = styled.div`
    position: relative;
    width: 30%;
`;

const SearchContainer = styled.div`
    width: 40px;
    height: 40px;
    background-color: #f2f2f2;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    top: 0;
    right: ${({ showButton }) => (showButton ? "calc(100% - 40px)" : "0")};
    transition: right 0.3s ease-in-out;
    z-index: -1;
`;

const JoinButton = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
