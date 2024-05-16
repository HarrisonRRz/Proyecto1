import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import AppointmentForm from './src/components/AppointmentForm';
import Confirmation from './src/components/Confirmation';
import Introduction from './src/components/Introduction';
import CatalogoBD from './src/components/CatalogBD';
import Contact from './src/components/Contact';
import SearchVehicle from './src/components/SearchVehicle';
import DrivingTest from './src/components/DrivingTest';
import Login from './src/components/Login';
import DetailsVehicle from './src/components/DetailsVehicle';

import FirebaseState from './context/firebase/firebaseState';
import VehiculoState from './context/vehiculos/vehiculoState';
import { NativeBaseProvider } from 'native-base';

const Stack = createStackNavigator();
 
const App = () => {
  return (
    <NativeBaseProvider>
      <FirebaseState>
        <VehiculoState>
          <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Introduction" component={Introduction}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="AppointmentForm" component={AppointmentForm}/>
                <Stack.Screen name="Confirmation" component={Confirmation}/>
                <Stack.Screen name="CatalogBD" component={CatalogoBD}/>
                <Stack.Screen name="Contact" component={Contact}/>
                <Stack.Screen name="SearchVehicle" component={SearchVehicle}/>
                <Stack.Screen name="DrivingTest" component={DrivingTest}/>
                <Stack.Screen name="DetailsVehicle" component={DetailsVehicle}/>
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </VehiculoState>
      </FirebaseState>
    </NativeBaseProvider>
  )
}
export default App