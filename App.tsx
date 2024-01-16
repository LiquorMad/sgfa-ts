import React from "react";
import { NativeBaseProvider } from "native-base";
import { Routes  } from "./src/routes";
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider }  from 'styled-components/native';
import THEME from './src/theme'
import 'react-native-gesture-handler';

export default function App() {  
  return (
      <ThemeProvider theme={THEME}>
        <StatusBar style="light" translucent backgroundColor="transparent"/>
        <Routes />
      </ThemeProvider>
  );
}