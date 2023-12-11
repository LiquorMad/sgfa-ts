import React from 'react';
import { DestinyText, HeaderRow, HeaderView, Title, WaitingTimeText } from '../screens/FilaIn/styles';

type HeaderProps = {
    waitingTimeText: string;
    Destiny: string;
  };
  
const Header = (props: HeaderProps) => {
  return (
    <HeaderView>
        <Title>SISTEMA DE GESTÃO DE FILA DE AUTOMOVIES</Title>
        <HeaderRow></HeaderRow>
        <WaitingTimeText>{props.waitingTimeText}</WaitingTimeText>
        <DestinyText>{props.Destiny}</DestinyText>
    </HeaderView>
  )
}

export default Header;