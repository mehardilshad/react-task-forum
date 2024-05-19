import React from "react";
import styled from "styled-components";
import chat from "../../assets/images/chat-conversation.svg";

function TopicCard({ topics }) {
    return (
        <>
            {topics.map((topic) => (
                <Container key={topic.id}>
                    <Left>
                        <ImgContainer>
                            <Img src={topic.Img} />
                        </ImgContainer>
                        <Box>
                            <Title>{topic.title}</Title>
                            <Text>{topic.sub}</Text>
                        </Box>
                    </Left>
                    <Right>
                        <ResponseButton>
                            <IconContainer>
                                <Icon src={chat} />
                            </IconContainer>
                            <Response>
                                <span> {topic.response_count}</span>
                                RESPONSES
                            </Response>
                        </ResponseButton>
                        <AnswerButton>
                            <Answer>View Answer</Answer>
                        </AnswerButton>
                    </Right>
                </Container>
            ))}
        </>
    );
}

export default TopicCard;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 23px;
    border-bottom: 1px solid #17132740;
    padding-bottom: 25px;
    @media all and (max-width: 640px) {
        flex-direction: column;
        gap: 30px;
    }
`;
const AnswerButton = styled.div`
    padding: 12px 32px;
    background: #0a090e;
    border-radius: 5px;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    @media all and (max-width: 1080px) {
        padding: 12px 20px;
    }
`;
const Answer = styled.div`
    color: #fff9e3;
    font-family: "public_sans";
    font-weight: 500;
    font-size: 14px;
    @media all and (max-width: 1080px) {
        font-size: 13px;
    }
    @media all and (max-width: 480px) {
        font-size: 12px;
    }
`;
const ResponseButton = styled.div`
    padding: 12px 20px;
    background: #f2efff;
    border-radius: 30px;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
`;
const Response = styled.div`
    color: #0a090e;
    font-family: "public_sans";
    font-weight: 500;
    font-size: 9px;
    span {
        margin-right: 3px;
    }
`;
const Left = styled.div`
    display: flex;
    align-items: center;
    /* gap: 18px; */
    @media all and (max-width: 1400px) {
        width: 60%;
    }
    @media all and (max-width: 1080px) {
        width: 60%;
    }
    @media all and (max-width: 768px) {
        width: 50%;
    }
    @media all and (max-width: 640px) {
        width: 80%;
    }
    @media all and (max-width: 480px) {
        width: 95%;
    }
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const ImgContainer = styled.div`
    width: 50px;
    margin-right: 18px;
`;
const Box = styled.div`
    width: 100%;
`;
const Img = styled.img``;
const Title = styled.h1`
    font-size: 18px;
    color: #0a090e;
    font-family: "public_sans";
    font-weight: 400;
    @media all and (max-width: 480px) {
        font-size: 16px;
        margin-bottom: 10px;
    }
`;
const Text = styled.p`
    font-size: 11px;
    color: #0a090e9c;
    font-family: "public_sans";
    font-weight: 400;
`;
const IconContainer = styled.div`
    width: 20px;
`;

const Icon = styled.img``;
