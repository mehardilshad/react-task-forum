import React from "react";
import styled from "styled-components";
import TopicSections from "./TopicSection";
import TopContributor from "./TopContributor";
import Ebook from "./Ebook";

function LatestDiscussions() {
    return (
        <Container className="wrapper">
            <Left>
                <TopicSections />
                <LoadButton>Load More</LoadButton>
            </Left>
            <Right>
                <TopContributor />
                <Ebook />
            </Right>
        </Container>
    );
}

export default LatestDiscussions;
const Container = styled.div`
    padding: 100px 0 60px 0;
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1280px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
`;
const Left = styled.div`
    width: 65%;
    @media all and (max-width: 1280px) {
        width: 85%;
    }
    @media all and (max-width: 1180px) {
        width: 90%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
    }
`;
const Right = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 52px;
    @media all and (max-width: 1280px) {
        flex-direction: row;
        width: 90%;
        margin: 0 auto;
    }
    @media all and (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
    }
`;
const LoadButton = styled.button`
    padding: 12px 25px;
    border: 1px solid #0a090e;
    border-radius: 30px;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
`;
