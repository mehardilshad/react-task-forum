import React from "react";
import styled from "styled-components";
import search from "../../assets/images/search-white.svg";
import dot from "../../assets/images/dot.svg";
import bulb from "../../assets/images/bulb-icon.svg";
import chat from "../../assets/images/chat-icon.svg";
import arrow from "../../assets/images/arrow-down.svg";

function Spotlight() {
    return (
        <Container className="wrapper">
            <TopTitle>Home/Forum</TopTitle>
            <MainContent>
                <Title>FORUM</Title>
                <Heading>
                    Discuss & <span>Evolve</span>{" "}
                </Heading>
                <SubHeading>
                    Engage with Fellow Professionals: Join the Program Forum
                    Discussion!
                </SubHeading>
                <InputContainer>
                    <Input placeholder="Search Topics" />
                    <SearchIcon>
                        <Search src={search} alt="search" />
                    </SearchIcon>
                </InputContainer>
            </MainContent>
            <BottomContainer>
                <Left>
                    <IconContainer>
                        <Icon src={chat} alt="chat" />
                    </IconContainer>
                    <Text>Start discussing</Text>
                </Left>
                <DotContainer>
                    <Icon src={dot} alt="dot" />
                </DotContainer>
                <Left>
                    <IconContainer className="bulb">
                        <Icon src={bulb} alt="bulb" />
                    </IconContainer>
                    <Text>view topics</Text>
                </Left>
            </BottomContainer>
            <ArrowContainer>
                <Icon src={arrow} alt="chat" />
            </ArrowContainer>
        </Container>
    );
}

export default Spotlight;
const Container = styled.div`
    padding: 24px 0;
`;
const MainContent = styled.div`
    text-align: center;
    margin-bottom: 42px;
`;
const TopTitle = styled.p`
    font-size: 10px;
    color: #0a090e80;
    font-family: "public_sans";
`;
const Title = styled.h3`
    font-size: 13px;
    color: #0a090e;
    font-family: "public_sans_extra_light";
    font-weight: 300;
    text-transform: capitalize;
    margin-bottom: 5px;
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
const SubHeading = styled.h2`
    color: #0a090e9c;
    font-size: 16px;
    font-family: "public_sans";
    font-weight: 400;
    margin-bottom: 23px;
`;
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    border: 1px solid #0a090e;
    border-radius: 50px;
    width: 40%;
    font-size: 16px;
    margin: 0 auto;
`;
const Input = styled.input`
    border: none;
    font-size: 16px;
    color: #000;
    padding-left: 10px;
`;

const SearchIcon = styled.div`
    width: 45px;
    padding: 10px;
    background: #000;
    border-radius: 30px;
`;
const Search = styled.img`
    display: block;
    width: 100%;
`;
const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    margin-bottom: 14px;
`;
const DotContainer = styled.div`
    width: 6px;
`;

const IconContainer = styled.div`
    width: 65px;
    background: #fff2f6;
    padding: 10px 20px;
    border-radius: 39px;
    &.bulb {
        background: #bedfff;
    }
`;
const Icon = styled.img``;
const Text = styled.p`
    font-size: 13px;
    color: #0a090e;
    font-family: "public_sans";
    font-weight: 400;
    text-transform: uppercase;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const ArrowContainer = styled.div`
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    transform: translateX(20px);
`;
