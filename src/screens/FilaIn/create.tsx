import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import { Space } from '../FilaOut/styles';
import { Container } from './styles';


export function Create() {
  return (
    <Container >
      <Header 
          waitingTimeText="Fila de saída" 
          Destiny="Fundura"
        />
        <Space>
        </Space>
        <Text>Create filaIn</Text>
    </Container>
  );
}