import React from 'react';
import { View, Text, StyleSheet } from 'react-native';  // Asegúrate de importar Text y StyleSheet

export default function Screen321() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>3,2,1...¡despegue!</Text>
      <Text style={styles.points}>
        1) Componentes: {'\n'} Cohete de juguete o botella de plástico y regla de
        15 cm o más
      </Text>
      <Text style={styles.points}>
        2) Reglas: {'\n'} 
        1) Tu hijo/a debe estar sentado en el suelo {'\n'} 
        2) La regla la tiene que sostener alguien que no sea el peque.{'\n'}
        3) Tírale cálculos para que resuelva y por favor no se lo hagas contrareloj porque
           cuando a los peques les hacen contrareloj no tienen bastante tiempo
           para pensar por lo que perjudica su línea de pensamiento y se pone
           nervioso {'\n'} 
        4) Si tu peque responde bien, sube el cohete para más
           arriba, sino se quedará en el lugar si no despegó o va más abajo.
      </Text>
      <Text style={styles.points}>
        Cosas no permitidas: pistas, cambiar el método de cálculo o una hoja de
        papel para ayuda. {'\n'}
      </Text>
      <Text style={styles.points}>
        Método matemático: multiplicación, división, suma y resta. {'\n'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',  // Puedes cambiar el color de fondo si lo deseas
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  points: {
    fontSize: 16,
    lineHeight: 25,  // Aumentar el espacio entre líneas para mejor legibilidad
    marginBottom: 10,
  },
});
