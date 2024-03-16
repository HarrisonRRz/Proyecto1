import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button} from 'react-native-paper';

const SearchVehicle= () => {
  const [searchModel, setSearchModel] = useState('');

  const handleSearch = () => {
    console.log('Buscar un vehículo:', searchModel);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Vehículo</Text>
      <TextInput
        style={styles.input}
        value={searchModel}
        onChangeText={setSearchModel}
        placeholder="Introduce el modelo del vehículo"
      />
      <Button style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Buscar</Text>
      </Button>
    </View>
  );
};

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
