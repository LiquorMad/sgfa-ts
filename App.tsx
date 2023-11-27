import React from "react";
import {Home} from "./src/screens/Home";
import {StatusBar} from 'expo-status-bar'
import { ThemeProvider}  from 'styled-components/native';
import THEME from './src/theme'
export default function App() {  
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar style="light" translucent backgroundColor="transparent"/>
      <Home />
   </ThemeProvider>
  );
}
