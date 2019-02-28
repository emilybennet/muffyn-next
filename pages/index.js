import React from "react";
import NProgress from "nprogress";
import styled from "styled-components";

import MuffynLogoSvg from "../components/MuffynLogoSvg";
import Title from "../components/Title";
import Button from "../components/Button";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  svg {
    margin-bottom: 1em;
    width: 250px;
    path,
    polygon {
      fill: white;
    }
  }
`;

const StyledP = styled.p`
  line-height: 1.4em;
  max-width: 300px;
`;

const Cta = styled.footer`
  margin-top: 3em;
`;

const HomePage = props => {
  return (
    <Container>
      <MuffynLogoSvg />
      <Title>On March 1st</Title>
      <StyledP>Be wholesome by performing random acts of kindness.</StyledP>
      <Cta>
        <Button text="Get The Avatar" url="/avatar" />
        <Button
          text="Spread The Muffin"
          url="/static/Muffyn_Festival-Signal_Boost.zip"
        />
      </Cta>
    </Container>
  );
};

export default HomePage;
