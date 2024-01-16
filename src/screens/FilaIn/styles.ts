import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1; 
    width: 100%;
    margin: 0 auto
`;
export const ToggleTitle = styled.View`
    flex: 1;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 30px;
`;
export const HeaderView = styled.View`
    height: 189px;
    justify-content: center;
    background-color: ${({ theme }:any) => theme.COLORS.PRIMARY };
`;
export const ProgressBarContainer = styled.View`
    background-color: ${({ theme }:any) => theme.COLORS.BACKGROUND_PROGRESSBAR };
    margin-top: -45px;
    padding-bottom: 15px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;

export const ProgressBarMatricula = styled.View`
    flex-direction: row !important;
    justify-content: space-around !important;
`;
export const ProgressBarCarIcon = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;
export const CarIcon = styled.View`
    margin-top: 15px;
    background-color: ${({ theme }:any) => theme.COLORS.PRIMARY };
    height: 60px;
    width: 60px;
    border-top-left-radius: 75px;
    border-top-right-radius: 75px;
    border-bottom-left-radius: 75px;
    border-bottom-right-radius: 75px;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 10px black;
`;

export const ProgressBarText = styled.Text`
    font-size: 16px;
`;
export const Title = styled.Text`
    color:white;
    font-size: 15px;
    text-align: left;
    margin-top: 4px;
    margin-left: -10px;
`;

export const HeaderRow = styled.View`
    flex: 1;
    margin-top: -40px;
    border-bottom-width: 1px;
    border-color: white;
    border-style: solid;
    width: 100%;
`;
export const ProgressBarRow = styled.View`
    width: 94%;
    align-items:center;
    height:1.4px;
    background-color: ${({ theme }:any) => theme.COLORS.PRIMARY };
    position:absolute;
    margin-top: 50px;
    margin-left: 3%;
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
    margin-left:3%;
`;
//Actions
export const ActionContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
`;
export const ActionWrap = styled.View`
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: ${({ theme }:any) => theme.COLORS.PRIMARY };
    height: 75px;
    width: 75px;
    align-items: center;
    justify-content: center;
`;

export const ActionIcon = styled.View`
    margin-vertical: 15px;
    background-color: ${({ theme }:any) => theme.COLORS.PRIMARY };
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

//Table costumizing
export const Content = styled.View`
    flex: 1;
`;
export const HeadingTable = styled.Text`
    flex: 1;
    font-weight: bold;
`;
export const TopBarTable = styled.View`
    flex: 1;
`;
export const Row = styled.View`
    margin-right: -85px;
    flex-direction: row;
    justify-content: space-between;
    margin-vertical: 8px;
    border-radius: 3px;
    border-bottom-color: #D9D9D9;
    border-bottom-width: 1px;
    padding: ${({ theme }:any) => theme.SIZE.PADDING_TABLE };
`;
export const Table = styled.View`
    margin-horizontal: 25px;
`;
export const Cell = styled.Text`
    text-align: left;
    flex:1;
    font-size: 15px;
    color: ${(props:any) => 
        props.vez==='1' ? '#6490AC'
        : props.vez==='2' ? '#3D6E89'
        :props.vez==='3' ? '#21485D':
        '#92949B'};
`;
export const HeaderTable = styled.View`
    margin-top: 1px;
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }:any) => theme.SIZE.PADDING_TABLE };
    border-top-color: #000;
    border-top-width: 1px;
    border-bottom-color: #000;
    border-bottom-width: 1px;
    margin-horizontal:25px;
`;
//Footer 
export const FooterView = styled.View`
    margin-top: 1px;
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }:any) => theme.SIZE.PADDING_TABLE };
    border-top-color: #000;
    margin-horizontal:25px;
`;
export const FooterText = styled.Text`
    flex: 3;
    color: #92949B;
    text-align: left;
`;
export const FooterIcon = styled.Text`
    color: #92949B;
    margin-right: -10px;
`;