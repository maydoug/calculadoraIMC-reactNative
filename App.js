import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // ||useState: Para Salvar as Variaveis|| 
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  
  function handleSubmit(){
    const alt = altura / 100 ;
    const imc  = peso / (alt * alt);
    
    if (imc < 18.6 ){
      alert('você está abaixo do peso ideal: ' + imc.toFixed(2));
    }
    else if (imc >= 18.6 && imc < 24.9){
      alert('você está dentro do peso ideal:  ' + imc.toFixed(2));
    }
    else if(imc > 24.9 && imc < 34.9){
      alert('você está levemente acima do peso ideal: ' + imc.toFixed(2));
    }
    else {
      alert('você está acima do peso: ' + imc.toFixed(2));
    }
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Remediar </Text>
      <Text style={styles.subtitulo}>CALCULADORA DE IMC</Text>
      
      <TextInput 
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (kg)"
      keyboardType='numeric'
      />
      <TextInput 
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      placeholder="altura (cm)"
      keyboardType='numeric'
      />
      
      <TouchableOpacity 
      onPress={handleSubmit}
      style={styles.button}>
        <Text style={styles.buttontext}>Calcular</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5bbad5',
    marginTop: 40,
    textAlign: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#FFFFFF'
  },
  subtitulo: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  input: {
    backgroundColor: '#E6E6E6',
    color: '#121212',
    borderRadius: 15,
    marginTop: 35,
    margin: 10,
    padding: 15,
    fontSize: 18
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 10,
    backgroundColor: '#41Aef4'
  },
  buttontext:{
    color: '#FFF',
    fontSize: 25
  },
});
