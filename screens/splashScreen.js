import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AssetExample from '../../components/AssetExample';
import { Card } from 'react-native-paper';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);
  }, []);

  return (

    <View>
      <Text style={styles.paragraph}>Go Math Go</Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreen;
