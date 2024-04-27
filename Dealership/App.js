import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './scr/Screens/HomeScreen';
import Catalogue from './scr/Screens/CatalogueScreen';
import TechnicalScreen from './scr/Screens/TechnicalScreen';
import CustomerSupport from './scr/Screens/CustomerSupport';
import ServicesHistory from './scr/Screens/ServicesHistory';
import CarDetails from './scr/Screens/CarDetails';
import TestDrive from './scr/Screens/TestDrive';
import Notification from './scr/Screens/Notification';
import ReportScreen from './scr/Screens/ReportScreen';
import DetailsScreen from './scr/Screens/DetailsScreen';




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
        <Stack.Screen name="DETALLES" component={CarDetails}/>
        <Stack.Screen name="PRUEBA DE MANEJO" component={TestDrive}/>
        <Stack.Screen name="NOTIFICACIONES" component={Notification}/>
        <Stack.Screen name="REPORTES" component={ReportScreen} />
        <Stack.Screen
          name="LIST"
          component={DetailsScreen}
          options={({ route }) => ({ title: `Lista de ${route.params.dataType}` })}
        />   
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

