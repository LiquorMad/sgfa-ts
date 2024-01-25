import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button } from '../Button';
import { ControlledInput } from '../ControlledInput';
import { Container, TextGues } from './styles';
import { useForm} from 'react-hook-form';
import *  as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const VALID_EMAIL_EXPRESSION = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

type FormData = {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required('O nome é obrigatório'),
  password: yup.string().min(6, "A senha deve ter no minino 6 digitos").required('A senha é obrigatória'),
});

export function FormLogin() {
  const { control, handleSubmit,formState:{ errors } } = useForm<FormData>({
   resolver: yupResolver(schema)
  });

  function handleUserRegister(data :FormData) {
    console.log(data);
  }

  return (
    <Container>
      <ControlledInput
        control={control}
        name="username"
        icon="user"
        placeholder="Utilizador"
        error={errors.username}
      />
      <ControlledInput
        control={control}
        name='password'
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        error={errors.password}
      />
      <Button
        title="Cadastrar"
        onPress={handleSubmit(handleUserRegister)}
      />
      <TextGues>Entar como convidado</TextGues>
    </Container>
  )
}