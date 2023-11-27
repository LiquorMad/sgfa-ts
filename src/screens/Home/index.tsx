import React from 'react';
import { 
  Container,
  Header,
  Content, 
  Title, 
  WaitingTimeText, 
  Row, 
  DestinyText,
  ProgressBarContainer,
  ProgressBarText
} from './styles';

export function Home() {
    return (
      <Container >
        <Header >
          <Title>SISTEMA DE GESTÃO DE FILA DE AUTOMOVIES</Title>
          <Row></Row>
          <WaitingTimeText>Tempo médio de espera é de: 4 mins</WaitingTimeText>
          <DestinyText>Fundura</DestinyText>
        </Header>
        <ProgressBarContainer>
          <ProgressBarText>
            car 1
          </ProgressBarText>
        </ProgressBarContainer>
        <Content>
          
        </Content>
      </Container>
    );
}
