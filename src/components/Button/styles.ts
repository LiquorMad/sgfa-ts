import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-top: 30px;
  width: 80%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ theme }:any) => theme.COLORS.PRIMARY };
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
`;
