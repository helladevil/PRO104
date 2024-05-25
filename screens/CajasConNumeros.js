import React from 'react';
import { View, Text, StyleSheet } from 'react-native';  // Importa Text y StyleSheet

export default function CajasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Paso escondido</Text>
      <Text style={styles.points}>
        Componentes: {"\n"} cajas enumeradas y cajas con símbolos
      </Text>
      <Text style={styles.points}>
        Reglas: {"\n"}
        1) El peque estará sentado. {"\n"}
        2) Un padre estará con cajas y el peque tiene que formar cuentas con las cajas y con el resultado. {"\n"}
        3) Y si está bien, el juego continúa, pero sino... ¡¡¡¡¡ataque de cosquillas!!!!!
      </Text>
      <Text style={styles.points}>
        Cosas no permitidas: pistas {"\n"}
      </Text>
      <Text style={styles.points}>
        Método matemático: suma, resta, multiplicación o división {"\n"}
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
