import React from 'react';
import { 
  DestinyText, 
  HeaderRow, 
  HeaderView, 
  Title, 
  ToggleTitle, 
  WaitingTimeText,
} from '../screens/FilaIn/styles';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Space } from '../screens/FilaOut/styles';

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
      <View>
        <WaitingTimeText>{props.waitingTimeText}</WaitingTimeText>
        <DestinyText>{props.Destiny}</DestinyText>
      </View>
      <Space></Space>
    </HeaderView>
  )
}

export default Header;