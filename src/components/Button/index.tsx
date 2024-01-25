import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, TextGues, Title } from './styles';
import { View } from 'native-base';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>

  );
}