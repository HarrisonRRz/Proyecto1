import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import FirebaseContext from '../../context/firebase/firebaseContext';
import VehicleContext from '../../context/vehicles/vehicleContext';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const SearchVehicle = () => {
  const [searchModel, setSearchModel] = useState('');
  const { catalog, bringVehicles } = useContext(FirebaseContext);
  const { selectVehicle } = useContext(VehicleContext);
  const navigation = useNavigation(); // Inicializa useNavigation

  useEffect(() => {
    bringVehicles();
  }, []);

  const handleSearch = () => {
    const foundVehicle = catalog.find(vehicle => vehicle.descripcion === searchModel);

    if (foundVehicle) {
      console.log('Vehículo encontrado:', foundVehicle);
      selectVehicle(foundVehicle);
      navigation.navigate('DetailsVehicle');
    } else {
      console.log('Vehículo no encontrado');
      Alert.alert(
        'Vehículo no encontrado',
        'No se encontró ningún vehículo con el modelo ingresado.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Vehículo</Text>
      <TextInput
        style={styles.input}
        value={searchModel}
        onChangeText={setSearchModel}
        placeholder="Introduce el nombre del vehículo"
      />
      <Button style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Buscar</Text>
      </Button>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0d30ca',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff'
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchVehicle;