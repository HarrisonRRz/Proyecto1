import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información de Contacto</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>Concesionario</Text>
      </View>
      
      <View style={styles.contactInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>Concesionario@example.com</Text>
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.label}>Number:</Text>
        <Text style={styles.text}>123-456-7890</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6afaff',
    padding: 20,
  },
  title: {
    flex: 2,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  contactInfo: {
    flex: 3,
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    width: 85,
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20
  },
  text: {
    flex: 4,
    color: 'black',
    fontSize: 20,
  },
});

export default Contact;
