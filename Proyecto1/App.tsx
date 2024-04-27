import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import AppointmentForm from './src/components/AppointmentForm';
import Confirmation from './src/components/Confirmation';
import Introduction from './src/components/Introduction';
import Catalog from './src/components/Catalog';
import Contact from './src/components/Contact';
import SearchVehicle from './src/components/SearchVehicle';
import DrivingTest from './src/components/DrivingTest';
import Login from './src/components/Login';

import FirebaseState from './context/firebase/firebaseState';
import CitacionState from './context/citaciones/citacionState';
import { NativeBaseProvider } from 'native-base';
import CatalogoBD from './src/components/CatalogBD';
 
 
const Stack = createStackNavigator();
 
const App = () => {
  return (
    <NativeBaseProvider>
      <FirebaseState>
        <CitacionState>
          <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="CatalogBD" component={CatalogoBD}/>
                <Stack.Screen name="Introduction" component={Introduction}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="AppointmentForm" component={AppointmentForm}/>
                <Stack.Screen name="Confirmation" component={Confirmation}/>
                <Stack.Screen name="Catalog" component={Catalog}/>
                <Stack.Screen name="Contact" component={Contact}/>
                <Stack.Screen name="SearchVehicle" component={SearchVehicle}/>
                <Stack.Screen name="DrivingTest" component={DrivingTest}/>
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </CitacionState>
      </FirebaseState>
    </NativeBaseProvider>
  )
}
export default App