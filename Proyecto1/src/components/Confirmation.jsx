import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import globalStyles from '../styles/globalStyles';
 
const Confirmation = ({ navigation, route }) => {
  console.log(route);
  const { name, date, time, id, number } = route.params;
 
  useEffect(() => {
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Id', id);
    console.log('Number', number);
  }, [name, date, time, id, number]);
 
  return (
    <View>
      <Text style={globalStyles.label}>Appointment Confirmed!</Text>
      <Text style={globalStyles.label}>Name: {name}</Text>
      <Text style={globalStyles.label}>Date: {date}</Text>
      <Text style={globalStyles.label}>Time: {time}</Text>
      <Text style={globalStyles.label}>Id: {id}</Text>
      <Text style={globalStyles.label}>Number: {number}</Text>
      <Button
        style={globalStyles.button}
        mode ="contained"
        onPress={()=> navigation.navigate('Introduction')}>
        Volver
      </Button>
    </View>
  );
};
 
export default Confirmation;