import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

const Introduction = ({navigation}) => {
  return (
    <View
      style={styles.contains}>
      <Text style ={styles.title}>
        Bienvenido al concesionario
      </Text>

      <Button
        style={styles.button}
        mode ="contained"
        onPress={()=> navigation.navigate('AppointmentForm')}>
        Agendar una cita
      </Button>
      
      <Button
        style={styles.button}
        mode ="contained"
        onPress={()=> navigation.navigate('CatalogBD')}>
        Ver vehiculos
      </Button>
      
      <Button
        style={styles.button}
        mode = "contained"
        onPress={()=> navigation.navigate('SearchVehicle')}>
        Buscar Vehiculo
      </Button>

      <Button
        style={styles.button}
        mode='contained'
        onPress={()=> navigation.navigate('ServiceHistory')}>
        Historial de servicio
      </Button>
      
      <Button
        style={styles.button}
        mode='contained'
        onPress={()=> navigation.navigate('Contact')}>
        Contacto
      </Button>

      <Button
        style={styles.button}
        mode ="contained"
        onPress={()=> navigation.navigate('Login')}>
        Cerrar Sesion
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  contains:{
    flex: 1,
    backgroundColor: '#49cef7',
    justifyContent: 'center'
  },
  title:{
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#ffffff',
    color: '#000000', 
    padding: 3, 
    borderRadius: 30, 
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Introduction;