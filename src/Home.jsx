import React, { useContext } from "react";

import styled from "styled-components";
import Intro from "./components/Intro";
import Cocktails from "./components/Cocktails";

const Home = () => {
  return (
    <Wrapper>
      <Intro />
      <Cocktails />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #230312;
`;
export default Home;
