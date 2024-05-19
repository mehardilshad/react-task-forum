import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Spotlight from "./Spotlight";
import Avatars from "./Avatars";
import MostSearched from "./MostSearched";
import AvatarBubbles from "./AvatarBubbles";
import LatestDiscussions from "./LatestDiscussions";
import SubHeader from "./SubHeader";

function LandingPage() {
    const [scrollDirection, setScrollDirection] = useState("down");
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                setScrollDirection("down");
            } else {
                setScrollDirection("up");
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <Container>
            <HeaderWrapper className={scrollDirection === "up" ? "" : "hidden"}>
                <Header />
            </HeaderWrapper>
            <SubHeaderWrapper
                className={scrollDirection === "up" ? "hidden" : ""}
            >
                <SubHeader />
            </SubHeaderWrapper>
            <Spotlight />
            <Avatars />
            <MostSearched />
            <AvatarBubbles />
            <LatestDiscussions />
        </Container>
    );
}

export default LandingPage;

const Container = styled.div``;

const HeaderWrapper = styled.div`
    &.hidden {
        display: none;
    }
`;

const SubHeaderWrapper = styled.div`
    &.hidden {
        display: none;
    }
`;
