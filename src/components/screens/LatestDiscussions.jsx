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
`;
const Left = styled.div`
    width: 65%;
`;
const Right = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 52px;
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
