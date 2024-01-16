import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';


export function Change() {
  const [selected, setSelected] = React.useState("");

  function handleUserRegister() {
    console.log(selected);
  }
  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]
    return (
      <View style={styles.container}>
        <Text>Hello Change FilaIn!</Text>
      <SelectList 
        setSelected={(val:any) => setSelected(val)} 
        data={data} 
        save="value"/>
      <Button
        title="Cadastrar"
        onPress={handleUserRegister}/>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    height: '35%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
