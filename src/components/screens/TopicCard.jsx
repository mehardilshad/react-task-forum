import React from "react";
import styled from "styled-components";
import person from "../../assets/images/person1.svg";
import chat from "../../assets/images/chat-conversation.svg";

function TopicCard({ topics }) {
    return (
        <>
            {topics.map((topic, index) => (
                <Container>
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
`;
const AnswerButton = styled.div`
    padding: 12px 32px;
    background: #0a090e;
    border-radius: 5px;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
`;
const Answer = styled.div`
    color: #fff9e3;
    font-family: "public_sans";
    font-weight: 500;
    font-size: 14px;
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
    gap: 18px;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const ImgContainer = styled.div`
    width: 50px;
`;
const Box = styled.div``;
const Img = styled.img``;
const Title = styled.h1`
    font-size: 18px;
    color: #0a090e;
    font-family: "public_sans";
    font-weight: 400;
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
