import React from 'react';
import { Container } from '../../screens/FilaIn/styles';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderLoginView, HeaderText, Logo } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Space } from '../../screens/Punicao/styles';

export function HeaderLogin() {
  return (
    <HeaderLoginView>
        <Logo>SGFA</Logo>
        <HeaderText>Fila na bu mo</HeaderText>
        <FontAwesome name='user-o' size={55} style={styles.userLogo}/>
    </HeaderLoginView>
  );
}
const styles = StyleSheet.create({
    userLogo: {
      color: '#fff',
    }
  });
  