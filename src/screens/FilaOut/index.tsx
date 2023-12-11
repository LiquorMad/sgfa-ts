import React from 'react';
import { 
  Container,
  Content, 
  ProgressBarRow,
  ProgressBarContainer,
  ProgressBarText,
  ProgressBarMatricula,
  ProgressBarCarIcon,
  CarIcon,
  HeadingTable,
  Table,
  HeaderTable,
  Cell,
  Row,
  ActionContainer,
  ActionIcon,
} from '../FilaIn/styles';
import {FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Space } from './styles';

const DATA = [
  {"vez":"1","matricula":"ST-01-AA","hora":"12:20"},
  {"vez":"2","matricula":"ST-02-AA","hora":"12:22"},
  {"vez":"3","matricula":"ST-03-AA","hora":"12:22"},
  {"vez":"4","matricula":"ST-04-AA","hora":"12:25"},
  {"vez":"5","matricula":"ST-05-AA","hora":"12:30"},
  {"vez":"6","matricula":"ST-06-AA","hora":"12:30"},
  {"vez":"7","matricula":"ST-07-AA","hora":"12:31"},
]
export interface IFilaIn {
  vez: string,
  matricula: string,
  hora: string,
}
export function FilaOut() {
  const Item = ({data}: {data: IFilaIn}) =>(
    <Row >
      <Cell vez={data.vez}>{data.vez}</Cell>
      <Cell vez={data.vez}>{data.matricula}</Cell>
      <Cell vez={data.vez}>{data.hora}</Cell>
      <Cell><Ionicons name='trash' size={25}style={{color:'red'}}/></Cell>
    </Row>
  )
    return (
      <Container>
      
      <Header 
        waitingTimeText="Fila de saída" 
        Destiny="Fundura"/>
        <Space>
        </Space>
        <Content>
          <HeaderTable>
            <HeadingTable>Vez</HeadingTable> 
            <HeadingTable>Matricula</HeadingTable> 
            <HeadingTable>Hora</HeadingTable> 
          </HeaderTable>
          <Table style={{flex: 1}}>
            <FlatList
              data={DATA}
              renderItem={({item}) => <Item data={item}/>}
              keyExtractor={(item: IFilaIn) => item.vez}
            />
          </Table>
        </Content>
      </Container>
    );
    
}
