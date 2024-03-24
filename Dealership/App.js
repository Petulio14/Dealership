import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './scr/Screens/HomeScreen';
import Catalogue from './scr/Screens/CatalogueScreen';
import TechnicalScreen from './scr/Screens/TechnicalScreen';
import CustomerSupport from './scr/Screens/CustomerSupport';
import ServicesHistory from './scr/Screens/ServicesHistory';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="INICIO" component={HomeScreen} />
        <Stack.Screen name="CATALOGO" component={Catalogue} />
        <Stack.Screen name="TECNICO"   component={TechnicalScreen} />
        <Stack.Screen name ="ASESORIA" component={CustomerSupport} />
        <Stack.Screen name="HISTORIAL" component={ServicesHistory}/>
             
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

