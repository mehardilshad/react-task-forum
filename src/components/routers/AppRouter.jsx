import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "../screens/LandingPage";

// import TechnologyLanding from "../../screens/technology-landing/TechnologyLanding";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

            {/* <Route path="/:*" element={<ErrorPage />} /> */}
        </Routes>
    );
};

export default AppRouter;
const Cover = styled.div`
    height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
