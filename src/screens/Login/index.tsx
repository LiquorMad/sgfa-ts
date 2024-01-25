import React from 'react';
import { HeaderLogin } from '../../components/HeaderLogin';
import { Container } from '../FilaIn/styles';
import { ContentLogin } from './styles';
import { FormLogin } from '../../components/FormLogin';

export function Login() {
  return (
    <Container>
        <HeaderLogin/>
        <ContentLogin>
            <FormLogin></FormLogin>
        </ContentLogin>
    </Container>
  );
}
