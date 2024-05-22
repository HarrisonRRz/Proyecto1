import React, { useContext, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { PaperProvider, Button, TextInput } from 'react-native-paper';
import firebase from '../../firebase';

const DrivingTest = ({ navigation, route }) => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');
  const { description } = route.params;

  const handleSubmit = async () => {
    if (!date || !name || !id || !number) {
      Alert.alert(
        'Error',
        'Por favor, complete todos los campos antes de enviar el formulario.',
        [{ text: 'OK' }]
      );
      return;
    }

    const testDriveObj = {
      dia: date,
      nombre: name,
      documento: id,
      numero: number,
      VehiculoPrueba: description,
      created: Date.now(),
    };

    try {
      const vehicles = await firebase.db.collection('pruebasdemanejo').add(testDriveObj);
      console.log(vehicles.id);
      navigation.navigate('Confirmation', { date, name, id, number });
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Error',
        'Hubo un problema al enviar el formulario. Inténtalo de nuevo.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleChangeName = (text) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(text) || text === '') {
      setName(text);
    }
  };

  const handleChangeNumber = (text) => {
    const regex = /^[0-9]*$/;
    if (regex.test(text) || text === '') {
      setNumber(text);
    }
  };

  const handleChangeDate = (text) => {
    const regex = /^[0-9\/]*$/;
    if (regex.test(text) || text === '') {
      setDate(text);
    }
  };

  const handleChangeId = (text) => {
    const regex = /^[0-9]*$/;
    if (regex.test(text) || text === '') {
      setId(text);
    }
  };

  const showAlert = () => {
    Alert.alert(
      'Alerta',
      '¿Estás seguro de enviar este formulario?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelado'),
          style: 'cancel'
        },
        {
          text: 'Enviar',
          onPress: handleSubmit
        }
      ]
    );
  };

  return (
    <PaperProvider>
      <View style={globalStyles.contains}>
        <Text style={globalStyles.label2}>Ingresa la información</Text>
        <Text style={globalStyles.label}>Date:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={date}
          textColor='black'
          onChangeText={handleChangeDate} />

        <Text style={globalStyles.label}>Name:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={name}
          textColor='black'
          onChangeText={handleChangeName} />

        <Text style={globalStyles.label}>Id:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={id}
          textColor='black'
          onChangeText={handleChangeId} />

        <Text style={globalStyles.label}>Number:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={number}
          textColor='black'
          onChangeText={handleChangeNumber} />

        <Button
          style={globalStyles.button}
          mode="contained"
          onPress={showAlert}
          labelStyle={globalStyles.buttonText}
        >
          Enviar
        </Button>
      </View>
    </PaperProvider>
  );
};

export default DrivingTest;
