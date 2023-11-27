import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1; 
    width: 100%;
    margin: 0 auto
`;
export const Header = styled.View`
    height: 189px;
    justify-content: flex-end;
    padding: 0 24px 16px;
    background-color: ${({ theme }:any) => theme.COLORS.PRIMARY };
`;
export const ProgressBarContainer = styled.View`
    background-color: ${({ theme }:any) => theme.COLORS.BACKGROUND_PROGRESSBAR };
    height: 155px;
    margin-top: -45px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

export const ProgressBarText = styled.Text`
    font-size: 16px;
`;
export const Title = styled.Text`
    flex: 1;
    margin-top: 30px;
    margin-bottom: 30px;
    color:white;
    font-size: 16px;
`;

export const Row = styled.View`
    flex: 1;
    margin-top: -40px;
    border-bottom-width: 1px;
    border-color: white;
    border-style: solid;
    width: 100%;
`;
export const WaitingTimeText = styled.Text`
    flex: 2;
    padding-top: 10px;
    color:white;
    text-align: center;
`;
export const DestinyText = styled.Text`
    flex: 3;
    color:white;
    text-align: left;
`;

export const Content = styled.View`
    height:100%;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;
