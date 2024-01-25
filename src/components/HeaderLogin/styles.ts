import styled from 'styled-components/native';

export const HeaderLoginView = styled.View`
    display: flex;
    flex-direction: column;
    height: 236px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }:any) => theme.COLORS.PRIMARY };
`;

export const Logo = styled.Text`
    text-align: center;
    margin-bottom: 10px;
    font-size: 35px;
    color: #fff;
`;
export const HeaderText = styled.Text`
    margin-bottom: 25px;
    text-align: center;
    font-size: 15px;
    color: #fff;
`;