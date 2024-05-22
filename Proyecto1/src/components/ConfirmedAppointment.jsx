import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import globalStyles from '../styles/globalStyles';

const ConfirmedAppointment = ({ navigation, route }) => {
  const { name, date, time } = route.params;

  useEffect(() => {
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
  }, [name, date, time]);

  return (
    <View style={globalStyles.confirmationContainer}>
      <Text style={globalStyles.titleText}>Appointment Confirmed!</Text>
      <Text style={globalStyles.confirmationText}>Name: {name}</Text>
      <Text style={globalStyles.confirmationText}>Date: {date}</Text>
      <Text style={globalStyles.confirmationText}>Time: {time}</Text>
      <Button
        style={globalStyles.button}
        mode="contained"
        onPress={() => navigation.navigate('Introduction')}
        labelStyle={globalStyles.buttonText}
      >
        Volver
      </Button>
    </View>
  );
};

export default ConfirmedAppointment;