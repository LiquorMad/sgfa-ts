import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 75px;
  margin-bottom: 16px;
`;
export const TextGues = styled.Text`
  margin-top: 30px;
  text-align: center;
  font-size: 15px;
  color: ${({ theme }:any) => theme.COLORS.PRIMARY};
`;