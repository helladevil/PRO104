  import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Blue extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"lightblue"}}>3,2,1...¡despegue!  </Text>
        <Text> </Text>
        <Text style={styles.points}>1) componentes:  {"\n"}cohete espacial o botella de plastico </Text>
        <Text> </Text>
        <Text style={styles.points} >2) Reglas: {"\n"} hasle preguntas matematicas (basicamente calculos)a tu hijo/a , si este responde correctamente en la primera el cohete se moveria un poco para arriba, si no desciende o se queda en el lugar si no despegó.  </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Regresar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 20
  },  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }
})