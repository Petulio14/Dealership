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
import FormularioVehiculo from './scr/Screens/FormularioVehiculo';
import VehicleStage from './scr/context/vehicles/pedidos/vehiclesState';
import FirebaseState from './scr/context/firebase/fireabseState';
import VehicleList from './scr/Screens/VehicleList';
import ResumenPedido from './scr/Screens/ResumenPedido';
import ProgresoPedido from './scr/Screens/ProgresoPedido';
import ListReport from './scr/Screens/ListReport';





const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <FirebaseState>
    <VehicleStage>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle:{
                  backgroundColor: '#FF4343',
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                }
              }}>
        <Stack.Screen name="INICIO" component={HomeScreen} />
        <Stack.Screen name="CATALOGO" component={VehicleList} />
        <Stack.Screen name="TECNICO"   component={TechnicalScreen} />
        <Stack.Screen name ="ASESORIA" component={CustomerSupport} />
        <Stack.Screen name="HISTORIAL" component={ServicesHistory}/>
        <Stack.Screen name="DETALLES" component={CarDetails}/>
        <Stack.Screen name="PRUEBA DE MANEJO" component={TestDrive}/>
        <Stack.Screen name="NOTIFICACIONES" component={Notification}/>
        <Stack.Screen name="REPORTES" component={ReportScreen} />
        <Stack.Screen name="ResumenPedido" component={ResumenPedido} />
        <Stack.Screen name="FormularioVehiculo" component={FormularioVehiculo} />
        <Stack.Screen name="ProgresoPedido" component={ProgresoPedido} />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
        />   
         <Stack.Screen
          name="LIST"
          component={ListReport}
          options={({ route }) => ({ title: `Lista de ${route.params.dataType}` })}
        />   
      </Stack.Navigator>
      </NavigationContainer>
      </VehicleStage>
      </FirebaseState>
    
   
  );
}

