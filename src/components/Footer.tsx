import React from 'react';
import { FooterView, FooterIcon, FooterText } from '../screens/FilaIn/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Footer: React.FC = () => {
  return (
    <FooterView>
        <FooterText>2022 © LEONILDO BORGES MONIZ</FooterText>
        <FooterIcon>
            <FontAwesome5 name='user' size={25}style={{color:'#062F40'}}/>
        </FooterIcon>
    </FooterView>
  )
}

export default Footer;