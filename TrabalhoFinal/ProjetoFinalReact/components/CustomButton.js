import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const StyledTouchableOpacity = styled.TouchableOpacity`
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

const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;

const CustomButton = ({ title, onPress }) => {
  return (
    <StyledTouchableOpacity onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </StyledTouchableOpacity>
  );
};

export default CustomButton;
