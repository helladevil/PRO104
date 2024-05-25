import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Button } from 'react-native';
import Home from './HomeScreen'


export default class BuzzerScreen extends React.Component {
  render(){
    return(
      <View>
        
        <Button color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}