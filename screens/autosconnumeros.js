import React from 'react';
import { View, Text, StyleSheet } from 'react-native';  // Importa Text y StyleSheet

export default function PasoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Paso escondido</Text>
      <Text style={styles.points}>
        Componentes: {"\n"} cuarto oscuro que no dé miedo y en lo posible el suelo marcado o con papeles o cinta adhesiva
      </Text>
      <Text style={styles.points}>
        Reglas: {"\n"}
        1) Tu hijo/a debe estar parado. {"\n"}
        2) El padre o madre del peque debe caminar en las marcas (cinta, papel o marcas de tiza) cuando está oscuro. {"\n"}
        3) El padre o madre cuando pare de caminar tendrá que decir "¡Listo!" {"\n"}
        4) El peque o el otro padre debe encender la luz y el peque deberá decir cuántos pasos realizó el adulto y si está bien, el juego continúa, pero si no... ¡¡¡¡¡ataque de cosquillas!!!!!
      </Text>
      <Text style={styles.points}>
        Cosas no permitidas: pistas {"\n"}
      </Text>
      <Text style={styles.points}>
        Método matemático: conteo {"\n"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',  // Fondo blanco para toda la vista
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  points: {
    fontSize: 16,
    lineHeight: 25,  // Espaciado de línea para mejorar legibilidad
    marginBottom: 10,  // Margen abajo para separar cada bloque de texto
  },
});
