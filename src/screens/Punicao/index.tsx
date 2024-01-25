import React, { useState } from 'react';
import { 
  Container,
  Content, 
  ProgressBarText,
  ProgressBarMatricula,
  HeadingTable,
  Table,
  HeaderTable,
  Cell,
  Row,
  ActionContainer,
  ActionIcon,
} from './styles';
import {Button, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from "react-native-modal";
import { CreateFilaIn } from '../../components/CreateFilaIn';
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
export function Punicao() {

  const [isModalVisibleCreate, setModalVisibleCreate] = useState(false);

  const toggleModalCreate = () => {
    setModalVisibleCreate(!isModalVisibleCreate);
  };

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
          waitingTimeText="Lista das punições" 
          Destiny=""/>
      <ActionContainer>
        <ActionIcon >
          <AntDesign onPress={toggleModalCreate} name='addfile' size={25}style={{color:'white'}}/>
        </ActionIcon>
      </ActionContainer>
      <ProgressBarMatricula>
        <ProgressBarText onPress={toggleModalCreate} style={{color: '#92949B'}}>Novo Registo</ProgressBarText>
        <Modal isVisible={isModalVisibleCreate}>
          <CreateFilaIn />
          <Button title="Hide modal" onPress={toggleModalCreate} />
        </Modal>
      </ProgressBarMatricula>
        <Content>
          <HeaderTable>
            <HeadingTable>Matricula</HeadingTable> 
            <HeadingTable>Inicio</HeadingTable> 
            <HeadingTable>Fim</HeadingTable> 
          </HeaderTable>
          <Table >
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
