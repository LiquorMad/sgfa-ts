import styled from 'styled-components/native';

export const Space = styled.View`
    background-color: ${({ theme }:any) => theme.COLORS.BACKGROUND_PROGRESSBAR };
    margin-top: -45px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: 50px;
`;