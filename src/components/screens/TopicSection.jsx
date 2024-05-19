import React from "react";
import styled from "styled-components";
import arrow from "../../assets/images/down-arrow.svg";
import bulb from "../../assets/images/bulb-icon.svg";
import search from "../../assets/images/search.svg";
import TopicCard from "./TopicCard";
import person1 from "../../assets/images/person1.svg";
import person2 from "../../assets/images/person2.svg";
import person3 from "../../assets/images/person3.svg";
import person4 from "../../assets/images/person4.svg";
import person5 from "../../assets/images/person5.svg";
import person6 from "../../assets/images/person6.svg";
import person7 from "../../assets/images/person7.svg";
import person8 from "../../assets/images/person8.svg";
import person9 from "../../assets/images/person9.svg";
import person10 from "../../assets/images/person10.svg";
import person11 from "../../assets/images/person11.svg";
import person12 from "../../assets/images/person12.svg";
import person13 from "../../assets/images/person13.svg";

function TopicSections() {
    const topics = [
        {
            id: 1,
            sub: "Posted by Jishnu Ambadi",
            title: "What are the key principles of coding?",
            Img: person1,
            response_count: "12",
        },
        {
            id: 2,
            sub: "Posted by Sreelakshmi",
            title: "How does guide facilitate accurate medical billing?",
            Img: person2,
            response_count: "32",
        },
        {
            id: 3,
            sub: "Posted by Ambili",
            title: "What are the major sections within the guide?",
            Img: person3,
            response_count: "20",
        },
        {
            id: 4,
            sub: "Posted by Farzana",
            title: "How often is the guide updated?",
            Img: person4,
            response_count: "2",
        },
        {
            id: 5,
            sub: "Posted by Neethu",
            title: "What is the purpose of modifiers in coding?",
            Img: person5,
            response_count: "12",
        },
        {
            id: 6,
            sub: "Posted by Sagar",
            title: "What are the differences between and ICD codes?",
            Img: person6,
            response_count: "42",
        },
        {
            id: 7,
            sub: "Posted by Anton Joseph",
            title: "What is the significance of Level II codes in CPT?",
            Img: person7,
            response_count: "32",
        },
        {
            id: 8,
            sub: "Posted by Akhil Joy",
            title: "How does guide handle telehealth services?",
            Img: person8,
            response_count: "32",
        },
        {
            id: 9,
            sub: "Posted by Sruthi PP",
            title: "How are codes categorized within the guide?",
            Img: person9,
            response_count: "32",
        },
        {
            id: 10,
            sub: "Posted by Anna Chakko",
            title: "What are the implications of incorrect coding?",
            Img: person10,
            response_count: "32",
        },
        {
            id: 11,
            sub: "Posted by Abhinav KS",
            title: "What is the purpose of the guide?",
            Img: person11,
            response_count: "32",
        },
        {
            id: 12,
            sub: "Posted by Rotta karuma",
            title: "How are  codes organized within the guide?",
            Img: person12,
            response_count: "32",
        },
        {
            id: 13,
            sub: "Posted by Richard Kiger",
            title: "What is the role of modifiers?",
            Img: person13,
            response_count: "32",
        },
    ];

    return (
        <Container>
            <TopicSection>
                <Top>
                    <Left>
                        <Content>Latest dicussions as of</Content>
                        <Contents>
                            <Box></Box>
                            <Text>MARCH 12 2024</Text>
                        </Contents>
                    </Left>
                    <Right>
                        <IconContainer>
                            <Icon src={bulb} alt="bulb" />
                        </IconContainer>
                        <Text>All TOPICS</Text>
                        <IconContainer className="arrow">
                            <Icon className="arrow" src={arrow} alt="bulb" />
                        </IconContainer>
                    </Right>
                </Top>
                <InputContainer>
                    <Input placeholder="Search Topics" />
                    <SearchIcon>
                        <Search src={search} alt="search" />
                    </SearchIcon>
                </InputContainer>
                <Bottom></Bottom>
            </TopicSection>

            <TopicCard topics={topics} />
        </Container>
    );
}

export default TopicSections;
const Container = styled.div``;
const TopicSection = styled.div`
    margin-bottom: 54px;
    @media all and (max-width: 640px) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    @media all and (max-width: 360px) {
        width: 100%;
    }
`;
const Top = styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    margin-bottom: 23px;
    @media all and (max-width: 640px) {
        flex-direction: column;
        margin-bottom: 20px;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
`;
const IconContainer = styled.div`
    &.arrow {
        margin-left: 10px;
    }
`;
const Box = styled.div`
    width: 17px;
    height: 12px;
    background: #b31942;
`;
const Icon = styled.img``;
const Text = styled.div`
    font-size: 11px;
    color: #0a090e;
    font-family: "public_sans";
    font-weight: 500;
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Right = styled.div`
    /* width: 65px; */
    padding: 10px 20px;
    border-radius: 39px;
    background: #bedfff;
    display: flex;
    align-items: center;
    gap: 5px;
`;
const Contents = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;
const Content = styled.div`
    font-size: 11px;
    color: #0a090e;
    font-family: "public_sans_extra_light";
    font-weight: 300;
    text-transform: uppercase;
`;
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    border: 1px solid #0a090e;
    border-radius: 50px;
    font-size: 16px;
    margin: 0 auto;
    @media all and (max-width: 640px) {
        padding: 5px 10px;
    }
`;
const Input = styled.input`
    border: none;
    font-size: 16px;
    color: #000;
    padding-left: 10px;
    width: 90%;
`;

const SearchIcon = styled.div`
    width: 45px;
    padding: 10px;
    /* background: #000; */
    border-radius: 30px;
`;
const Search = styled.img`
    display: block;
    width: 100%;
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    justify-content: center;
`;
