import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { logar } from './requisicoes';




export default function App() {


  async function fazLogin(email: string, senha: string) {
    const resultado = await logar(email, senha);
    console.log(resultado);
  }

  return (
    <View style={styles.container}>
      <Button title="Login?" onPress={()=> fazLogin('teste@teste.com', 'teste123') }/>
      <Text >Open up App.tsx to FFF  ff your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    marginLeft:80,
    flex: 1
  }
});

