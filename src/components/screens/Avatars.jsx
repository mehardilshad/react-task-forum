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
    /* zoom: 1.1; */
    background-color: ${({ id }) => {
        switch (id) {
            case "avatar-1":
                return "#FFF3EC";
            case "avatar-2":
                return "#6FDDFC";
            case "avatar-3":
                return "#B190B6";
            case "avatar-4":
                return "#FBEEAC";
            case "avatar-5":
                return "#BBAEF0";
            case "avatar-6":
                return "#FCCC60";
            case "avatar-7":
                return "#E7FFA6";
            case "avatar-8":
                return "#93CAFF";
            default:
                return "";
        }
    }};
    border-radius: 50%;
    border: 5px solid #fff;
    overflow: hidden;
    cursor: move;
    transition: transform 0.5s ease-in-out;
`;

const Avatar = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;
