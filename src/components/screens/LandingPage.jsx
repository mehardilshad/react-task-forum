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
    const [showSubHeader, setShowSubHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop) {
                setScrollDirection("down");
                setShowSubHeader(false);
            } else {
                setScrollDirection("up");
                setShowSubHeader(currentScrollTop > 0); // Only show if not at the top
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
            <Header />
            {showSubHeader && (
                <SubHeaderWrapper>
                    <SubHeader />
                </SubHeaderWrapper>
            )}
            <Spotlight />
            <Avatars />
            <AvatarBubbles />
            <MostSearched />
            <LatestDiscussions />
        </Container>
    );
}

export default LandingPage;

const Container = styled.div``;

const SubHeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
`;
