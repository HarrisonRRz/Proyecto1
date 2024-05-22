import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import globalStyles from '../styles/globalStyles';
 
const Confirmation = ({ navigation, route }) => {
  console.log(route);
  const { name, date, id, number } = route.params;
 
  useEffect(() => {
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Id', id);
    console.log('Number', number);
  }, [name, date, id, number]);
 
  return (
    <View style={globalStyles.confirmationContainer}>
      <Text style={globalStyles.titleText}>Appointment Confirmed!</Text>
      <Text style={globalStyles.confirmationText}>Name: {name}</Text>
      <Text style={globalStyles.confirmationText}>Date: {date}</Text>
      <Text style={globalStyles.confirmationText}>Id: {id}</Text>
      <Text style={globalStyles.confirmationText}>Number: {number}</Text>
      <Button
        style={globalStyles.button}
        mode ="contained"
        labelStyle={globalStyles.buttonText}
        onPress={()=> navigation.navigate('Introduction')}>
        Volver
      </Button>
    </View>
  );
};
 
export default Confirmation;