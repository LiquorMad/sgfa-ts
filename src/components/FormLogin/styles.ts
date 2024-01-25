import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 75px;
  margin-bottom: 16px;
  align-items: center;
`;
export const TextGues = styled.Text`
margin-top: 30px;
  font-size: 15px;
  color: ${({ theme }:any) => theme.COLORS.PRIMARY};
`;