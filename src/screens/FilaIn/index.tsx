import React, { useState } from "react";
import Modal from "react-native-modal";
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
} from './styles';
import {Button, FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import { CreateFilaIn } from "../../components/CreateFilaIn";
import { MyTurn } from "../../components/MyTurn";
import { Change } from "../../components/Change";
import { Space } from "../FilaOut/styles";


const DATA = [
  { "vez":"1", "matricula":"ST-01-AA", "hora":"12:20" },
  { "vez":"2", "matricula":"ST-02-AA", "hora":"12:22" },
  { "vez":"3", "matricula":"ST-03-AA", "hora":"12:22" },
  { "vez":"4", "matricula":"ST-04-AA", "hora":"12:25" },
  { "vez":"5", "matricula":"ST-05-AA", "hora":"12:30" },
  { "vez":"6", "matricula":"ST-06-AA", "hora":"12:30" },
  { "vez":"7", "matricula":"ST-07-AA", "hora":"12:31" },
]
export interface IFilaIn {
  vez: string,
  matricula: string,
  hora: string,
}
export function FilaIn() {

  const [isModalVisibleCreate, setModalVisibleCreate] = useState(false);

  const toggleModalCreate = () => {
    setModalVisibleCreate(!isModalVisibleCreate);
  };

  const [isModalVisibleChange, setModalVisibleChange] = useState(false);

  const toggleModalChange = () => {
    setModalVisibleChange(!isModalVisibleChange);
  };

  const [isModalVisibleTime, setModalVisibleTime] = useState(false);

  const toggleModalTime = () => {
    setModalVisibleTime(!isModalVisibleTime);
  };

  const Item = ({data}: {data: IFilaIn}) =>(
    <Row>
      <Cell vez={data.vez}>{data.vez}</Cell>
      <Cell vez={data.vez}>{data.matricula}</Cell>
      <Cell vez={data.vez}>{data.hora}</Cell>
      <Cell><Ionicons name='trash' size={25}style={{color:'red'}}/></Cell>
    </Row>
  )
  return (
    <Container >
      <Header 
        waitingTimeText="O Tempo de espera e de, 7 mins" 
        Destiny="Fundura"
      />
      <Space></Space>
      <ProgressBarContainer>
        <ProgressBarRow/>
        <ProgressBarCarIcon>
          <CarIcon>
            <AntDesign name='car' size={25} style={{color:'white'}}/>
          </CarIcon>
          <CarIcon>
            <AntDesign name='car' size={25}style={{color:'white'}}/>
          </CarIcon>
          <CarIcon>
            <AntDesign name='car' size={25}style={{color:'white'}}/>
          </CarIcon>
        </ProgressBarCarIcon>
        <ProgressBarMatricula >
          <ProgressBarText style={{color: '#6490AC'}}>ST-01-AA</ProgressBarText>
          <ProgressBarText style={{color: '#3D6E89'}}>ST-02-AA</ProgressBarText>
          <ProgressBarText style={{color: '#21485D'}}>ST-03-AA</ProgressBarText>
        </ProgressBarMatricula>
      </ProgressBarContainer>
      <ActionContainer>
        <ActionIcon>
          <Ionicons onPress={toggleModalTime} name='timer-outline' size={25}style={{color:'white'}}/>
        </ActionIcon>
        <ActionIcon>
          <AntDesign onPress={toggleModalChange} name='sync' size={25}style={{color:'white'}}/>
        </ActionIcon>
        <ActionIcon >
          <AntDesign onPress={toggleModalCreate} name='addfile' size={25}style={{color:'white'}}/>
        </ActionIcon>
      </ActionContainer>
      <ProgressBarMatricula>
        <ProgressBarText style={{color: '#92949B'}}>Minha Vez</ProgressBarText>
        <ProgressBarText style={{color: '#92949B'}}>Mudar Rota</ProgressBarText>
        <ProgressBarText onPress={toggleModalCreate} style={{color: '#92949B'}}>Novo Registo</ProgressBarText>
        <Modal isVisible={isModalVisibleCreate}>
          <CreateFilaIn />
          <Button title="Hide modal" onPress={toggleModalCreate} />
        </Modal>
        <Modal isVisible={isModalVisibleChange}>
          <Change />
          <Button title="Hide modal" onPress={toggleModalChange} />
        </Modal>
        <Modal isVisible={isModalVisibleTime}>
          <MyTurn />
          <Button title="Hide modal" onPress={toggleModalTime} />
        </Modal>
      </ProgressBarMatricula>
      <Content>
        <HeaderTable>
          <HeadingTable>Vez</HeadingTable> 
          <HeadingTable>Matricula</HeadingTable> 
          <HeadingTable>Hora</HeadingTable> 
        </HeaderTable>
        <Table>
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
