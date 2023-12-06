import React from 'react';
import { 
  Container,
  Header,
  Content, 
  Title, 
  WaitingTimeText, 
  HeaderRow, 
  ProgressBarRow,
  DestinyText,
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
  Footer,
  FooterText,
  FooterIcon
} from './styles';
import {FlatList} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
export function Home() {
  const Item = ({data}: {data: IFilaIn}) =>(
    <Row >
      <Cell vez={data.vez}>{data.vez}</Cell>
      <Cell vez={data.vez}>{data.matricula}</Cell>
      <Cell vez={data.vez}>{data.hora}</Cell>
      <Cell><Ionicons name='trash' size={25}style={{color:'red'}}/></Cell>
    </Row>
  )
  
    return (
      <Container >
        <Header >
          <Title>SISTEMA DE GESTÃO DE FILA DE AUTOMOVIES</Title>
          <HeaderRow></HeaderRow>
          <WaitingTimeText>Tempo médio de espera é de: 7 mins</WaitingTimeText>
          <DestinyText>Fundura</DestinyText>
        </Header>
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
            <Ionicons name='timer-outline' size={25}style={{color:'white'}}/>
          </ActionIcon>
          <ActionIcon>
            <AntDesign name='sync' size={25}style={{color:'white'}}/>
          </ActionIcon>
          <ActionIcon>
            <AntDesign name='addfile' size={25}style={{color:'white'}}/>
          </ActionIcon>
        </ActionContainer>
        <ProgressBarMatricula>
          <ProgressBarText style={{color: '#92949B'}}>Minha Vez</ProgressBarText>
          <ProgressBarText style={{color: '#92949B'}}>Mudar Rota</ProgressBarText>
          <ProgressBarText style={{color: '#92949B'}}>Novo Registo</ProgressBarText>
        </ProgressBarMatricula>
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
        <Footer>
        <FooterText>2022 © LEONILDO BORGES MONIZ</FooterText>
        <FooterIcon>
          <FontAwesome5 name='user' size={25}style={{color:'#062F40'}}/>
        </FooterIcon>
        </Footer>
      </Container>
    );
    
}
