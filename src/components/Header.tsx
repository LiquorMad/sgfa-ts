import React from 'react';
import { 
  DestinyText, 
  HeaderRow, 
  HeaderView, 
  Title, 
  ToggleTitle, 
  WaitingTimeText 
} from '../screens/FilaIn/styles';
import { DrawerToggleButton } from '@react-navigation/drawer';

type HeaderProps = {
    waitingTimeText: string;
    Destiny: string;
  };
  
const Header = (props: HeaderProps,navigation:any) => {
  return (
    <HeaderView>
      <ToggleTitle>
        <DrawerToggleButton tintColor='#fff' />
        <Title> SISTEMA DE GESTÃO DE FILA DE AUTOMÓVIES </Title>
      </ToggleTitle>
      <HeaderRow></HeaderRow>
      <WaitingTimeText>{props.waitingTimeText}</WaitingTimeText>
      <DestinyText>{props.Destiny}</DestinyText>
    </HeaderView>
  )
}

export default Header;