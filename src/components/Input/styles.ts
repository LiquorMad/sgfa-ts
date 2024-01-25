import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: #FFFFFF;
  border-bottom-width: 1px;
  border-bottom-color: #AEAEB3;   
${({ isFocused }:any) => isFocused && css`
      border-bottom-color: ${({ theme }:any) => theme.COLORS.PRIMARY};
  
  `};
`;

export const InputText = styled(TextInput) <Props>`
  flex: 1;
  background-color: #FFFFFF;
  color: #7A7A80;
  padding: 0 23px;
  border-bottom-width: 1px;
  border-bottom-color: #AEAEB3;   
  ${({ isFocused }:any) => isFocused && css`
      border-bottom-color: ${({ theme }:any) => theme.COLORS.PRIMARY};
  `};
`;