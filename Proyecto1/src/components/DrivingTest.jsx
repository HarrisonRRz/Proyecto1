import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { PaperProvider, Button, TextInput } from 'react-native-paper';

const DrivingTest = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = () => {
      console.log('Date:', date);
      console.log('Name:', name);
      console.log('Id', id);
      console.log('Number', number);

      navigation.navigate('Confirmation', { date: date, name: name, id: id, number: number });
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
        <Text style={globalStyles.label2}>Ingresa la informacion</Text>
        <Text style={globalStyles.label}>Date:</Text>
        <TextInput
          style={globalStyles.textInput2}
          value={date}
          textColor='black'
          onChangeText={date => setDate(date)} />

        <Text style={globalStyles.label}>Name:</Text>
        <TextInput
          style={globalStyles.textInput2}
          value={name}
          textColor='black'
          onChangeText={name => setName(name)} />

        <Text style={globalStyles.label}>Id:</Text>
        <TextInput
          style={globalStyles.textInput2}
          value={id}
          textColor='black'
          onChangeText={id => setId(id)} />

        <Text style={globalStyles.label}>Number:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={number}
          textColor='black'
          onChangeText={number => setNumber(number)} />

        <Button
          style={globalStyles.button}
          mode="contained"
          onPress={showAlert}>
           Enviar
        </Button>
      </View>
    </PaperProvider>
  );
};

export default DrivingTest;