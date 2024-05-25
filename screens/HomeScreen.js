import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';



export default function HomeScreen ({navigation}){

    goToBuzzerScreen=(buzzercolor)=> {
     
     }

     function goTo321(){
       navigation.navigate('Screen321')
     }

       function goToAutoScreen(){
       navigation.navigate('AutosScreen')
     }

       function goToNumericInput(){
       navigation.navigate('CajasScreen')
     }

       function goToHiddenStept(){
       navigation.navigate('PasoScreen')
     }

  return(

    <View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "red" }]}
       onPress={() => goToNumericInput()}
      >
        <Text style={styles.buttonText}>cajas con numeros</Text>
        
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
       onPress={() => goToHiddenStept()}
      >
        <Text style={styles.buttonText}>Paso escondido</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "blue" }]}
       onPress={() => goTo321()}
      >
        <Text style={styles.buttonText}>3,2,1...¡despegue!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "yellow" }]}
       onPress={() => goToAutoScreen()}
      >
        <Text style={styles.buttonText}>autos con numeros</Text>
      </TouchableOpacity>
    </View>
  )
    
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});



