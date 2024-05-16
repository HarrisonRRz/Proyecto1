import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { PaperProvider, Button, TextInput } from 'react-native-paper';
 
const AppointmentForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
 
  const handleSubmit = () => {
    // Handle form submission here
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
   
    navigation.navigate('Confirmation', { name: name, date: date, time: time });
  };

  const handleChangeName = (text) => {
    // Expresión regular para validar que solo contenga letras y espacios
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(text) || text === '') {
      setName(text);
    }
  };

  const handleChangeDate = (text) => {
    // Expresión regular para validar que solo contenga números y símbolos
    const regex = /^[0-9\/]*$/;
    if (regex.test(text) || text === '') {
      setDate(text);
    }
  };

  const handleChangeTime = (text) => {
    // Expresión regular para validar que solo contenga números y símbolos
    const regex = /^[0-9:]*$/;
    if (regex.test(text) || text === '') {
      setTime(text);
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
        <Text style ={globalStyles.label2}>Ingresa los datos</Text>
        <Text style ={globalStyles.label}>Name:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={name}
          textColor='black'
          onChangeText={handleChangeName} />
 
        <Text style={globalStyles.label}>Date:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={date}
          textColor='black'
          onChangeText={handleChangeDate} />
 
        <Text style={globalStyles.label}>Time:</Text>
        <TextInput
          style={globalStyles.textInput}
          value={time}
          textColor='black'
          onChangeText={handleChangeTime} />
 
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
 
export default AppointmentForm;