import * as React from 'react';
import { Text, View, StyleSheet,Image, } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
      <Image source={require("../assets/daijin.jpg")}></Image>
        <Text style={styles.text}>cargando</Text>
      </View>


      
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'lightpink',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;