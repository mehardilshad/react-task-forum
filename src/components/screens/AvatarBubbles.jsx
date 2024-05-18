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
            animateBubble(bubble);
        });
    }, []);

    const animateBubble = (bubble) => {
        const containerWidth = bubble.parentNode.offsetWidth;
        const containerHeight = bubble.parentNode.offsetHeight;

        let x = Math.random() * containerWidth;
        let y = Math.random() * containerHeight;

        const updatePosition = () => {
            const randomAngle = Math.random() * Math.PI * 2;
            const speed = 2;
            const randomXVelocity = Math.cos(randomAngle) * speed;
            const randomYVelocity = Math.sin(randomAngle) * speed;

            x += randomXVelocity;
            y += randomYVelocity;

            if (x < 0 || x > containerWidth || y < 0 || y > containerHeight) {
                x = Math.random() * containerWidth;
                y = Math.random() * containerHeight;
            }

            bubble.style.transform = `translate(${x}px, ${y}px)`;

            requestAnimationFrame(updatePosition);
        };

        updatePosition();
    };

    return (
        <Container>
            <BubbleContainer>
                {avatars.map((avatar, index) => (
                    <AvatarBubble
                        key={index}
                        id={`avatar-${index + 1}`}
                        className="avatar-bubble"
                    >
                        <Avatar src={avatar} alt="avatar" />
                    </AvatarBubble>
                ))}
            </BubbleContainer>
        </Container>
    );
}

export default Avatars;

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    margin: 0 auto;
    overflow: hidden;
    display: none;
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
    width: 150px;
    height: 150px;
    padding: 20px;
    background: ${({ id }) => {
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
    position: absolute;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
`;

const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
