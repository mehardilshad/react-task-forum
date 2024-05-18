import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Spotlight from "./Spotlight";
import Avatars from "./Avatars";
import MostSearched from "./MostSearched";
import AvatarBubbles from "./AvatarBubbles";
import LatestDiscussions from "./LatestDiscussions";
function LandingPage() {
    return (
        <Container>
            <Header />
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