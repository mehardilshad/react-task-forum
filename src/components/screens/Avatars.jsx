import React, { useEffect } from "react";
import styled from "styled-components";
import avatar_one from "../../assets/images/avatar1.svg";
import avatar_two from "../../assets/images/avatar2.svg";
import avatar_three from "../../assets/images/avatar3.svg";
import avatar_four from "../../assets/images/avatar4.svg";
import avatar_five from "../../assets/images/avatar5.svg";
import avatar_six from "../../assets/images/avatar6.svg";
import avatar_seven from "../../assets/images/avatar7.svg";
import avatar_eight from "../../assets/images/avatar8.svg";
import chat_one from "../../assets/images/chat-bubble1.svg";
import chat_six from "../../assets/images/chat-bubble2.svg";
import chat_two from "../../assets/images/chat-bubble3.svg";
import chat_three from "../../assets/images/chat-bubble4.svg";

function Avatars() {
    const avatars = [
        avatar_one,
        avatar_two,
        avatar_three,
        avatar_four,
        avatar_five,
        avatar_six,
        avatar_seven,
        avatar_eight,
    ];

    useEffect(() => {
        const avatarBubbles = document.querySelectorAll(".avatar-bubble");
        avatarBubbles.forEach((bubble) => {
            makeDraggable(bubble);
        });
    }, []);

    const makeDraggable = (bubble) => {
        bubble.addEventListener("mousedown", (e) => {
            e.preventDefault();
            const startX = e.clientX;
            const startY = e.clientY;
            const startLeft = bubble.offsetLeft;
            const startTop = bubble.offsetTop;

            const onMouseMove = (e) => {
                const deltaX = e.clientX - startX;
                const deltaY = e.clientY - startY;

                bubble.style.left = startLeft + deltaX + "px";
                bubble.style.top = startTop + deltaY + "px";
            };

            const onMouseUp = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        });
    };

    return (
        <Cover>
            <Container>
                <BubbleContainer>
                    {avatars.map((avatar, index) => (
                        <AvatarBubble
                            key={index}
                            id={`avatar-${index + 1}`}
                            className="avatar-bubble"
                        >
                            <Avatar
                                src={avatar}
                                alt="avatar"
                                draggable="false"
                            />
                            <ChatBubble
                                className={
                                    index == 2
                                        ? "three"
                                        : index == 1
                                        ? "two"
                                        : index == 0
                                        ? "one"
                                        : index == 5
                                        ? "six"
                                        : ""
                                }
                            >
                                <Img
                                    src={
                                        index == 2
                                            ? chat_three
                                            : index == 1
                                            ? chat_two
                                            : index == 0
                                            ? chat_one
                                            : index == 5
                                            ? chat_six
                                            : ""
                                    }
                                />
                            </ChatBubble>
                        </AvatarBubble>
                    ))}
                </BubbleContainer>
            </Container>
        </Cover>
    );
}

export default Avatars;
const Cover = styled.div`
    /* padding: 50px 0; */
`;
const Container = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    @media all and (max-width: 640px) {
        height: 200px;
    }
`;

const BubbleContainer = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const AvatarBubble = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 160px;
    /* zoom: 1.1; */
    background-color: ${({ id }) => {
        switch (id) {
            case "avatar-1":
                return " #B1E2EF";
            case "avatar-2":
                return "#6FDDFC";
            case "avatar-3":
                return "#FBEEAC";
            case "avatar-4":
                return " #B190B6";
            case "avatar-5":
                return "#BBAEF0";
            case "avatar-6":
                return "#FCCC60";
            case "avatar-7":
                return "#FFF3EC ";
            case "avatar-8":
                return "#E7FFA6";
            default:
                return "";
        }
    }};
    border-radius: 50%;
    border: 5px solid #fff;
    /* overflow: hidden; */
    cursor: move;
    transition: transform 0.5s ease-in-out;
    @media all and (max-width: 980px) {
        padding: 20px;
        width: 120px;
    }
    @media all and (max-width: 640px) {
        padding: 20px;
        width: 100px;
    }
    @media all and (max-width: 480px) {
        padding: 10px;
        width: 90px;
    }
    @media all and (max-width: 320px) {
        padding: 5px;
        width: 70px;
    }
`;

const Avatar = styled.img`
    /* max-width: 100%;
    max-height: 100%; */
    object-fit: contain;
`;
const ChatBubble = styled.div`
    position: absolute;
    bottom: 20px;
    left: -40px;
    z-index: 9999999;
    width: 90px;
    &.one {
        position: absolute;
        top: 55px !important;
        right: -20px !important;
        left: unset !important;
        bottom: unset !important;
        width: 50px;
        @media all and (max-width: 980px) {
            width: 40px;
            top: 45px !important;
        }
        @media all and (max-width: 640px) {
            width: 30px;
            top: 35px !important;
        }
        @media all and (max-width: 320px) {
            width: 20px;
            top: 25px !important;
        }
    }
    &.six {
        position: absolute;
        top: 0px !important;
        right: -20px !important;
        left: unset !important;
        bottom: unset !important;
        width: 80px;
        @media all and (max-width: 980px) {
            width: 70px;
        }
        @media all and (max-width: 640px) {
            width: 60px;
        }
        @media all and (max-width: 320px) {
            width: 40px;
        }
    }
    @media all and (max-width: 980px) {
        width: 70px;
    }
    @media all and (max-width: 640px) {
        width: 60px;
    }
    @media all and (max-width: 320px) {
        width: 40px;
    }
`;
const Img = styled.img``;
