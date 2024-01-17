import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export function Change() {
  const [data,setData] = useState([]);
  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = () => { 
    const URL = 'http://192.168.1.6:3333/api/players';
    axios.get(URL)
    .then((response) =>{
      let newArray = response.data.map((item:any) => {
        return {key: item.id, value: item.nome}
      })
      //Set Data Variable
      setData(newArray)
  })
  .then((data)=>{
    console.log(data);
  });
};
  const [selected, setSelected] = React.useState("");

  function handleUserRegister() {
    console.log(selected);
  }

    return (
      <View style={styles.container}>
        <Text>Hello Change FilaIn!</Text>
        <SelectList 
          setSelected={setSelected} 
          data={data} 
          onSelect={() => alert(selected)} 
        />
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

