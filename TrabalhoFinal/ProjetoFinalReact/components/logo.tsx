import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: #000;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  shadow-color: #00ff00;
  shadow-offset: 0px 0px; /* offset da sombra */
  shadow-opacity: 1;
  shadow-radius: 20px;
  elevation: 30;
`;

const LogoText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const Logo = () => {
  return (
    <Container>
      <LogoText>Grupo1Flix</LogoText>
    </Container>
  );
}

export default Logo;





