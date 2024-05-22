import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import globalStyles from '../styles/globalStyles';
import { PaperProvider, Button, TextInput } from 'react-native-paper';
import firebase from '../../firebase';

const AppointmentForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async () => {
    if (!name || !date || !time) {
      Alert.alert(
        'Error',
        'Por favor, complete todos los campos antes de enviar el formulario.',
        [{ text: 'OK' }]
      );
      return;
    }

    const appointmentObj = {
      name,
      date,
      time,
      created: Date.now()
    };

    try {
      const appointment = await firebase.db.collection('citas').add(appointmentObj);
      console.log(appointment.id);
      navigation.navigate('ConfirmedAppointment', { name, date, time });
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

  const handleChangeDate = (text) => {
    const regex = /^[0-9\/]*$/;
    if (regex.test(text) || text === '') {
      setDate(text);
    }
  };

  const handleChangeTime = (text) => {
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
        <Text style={globalStyles.label2}>Ingresa los datos</Text>
        <Text style={globalStyles.label}>Name:</Text>
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
          onPress={showAlert}
          labelStyle={globalStyles.buttonText}
        >
          Enviar
        </Button>
      </View>
    </PaperProvider>
  );
};

export default AppointmentForm;