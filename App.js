import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen321 from './screens/juegos/321';
import AutosScreen from './screens/juegos/autosconnumeros';
import CajasScreen from './screens/juegos/CajasConNumeros';
import PasoScreen from './screens/juegos/PasoEscondido';

import SplashScreen from './screens/splash/splashScreen';
import HomeScreen from './screens/Home/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Screen321" component={Screen321} />
        <Stack.Screen name="AutosScreen" component={AutosScreen} />
        <Stack.Screen name="CajasScreen" component={CajasScreen} />
        <Stack.Screen name="PasoScreen" component={PasoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


