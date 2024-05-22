import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import firebase from '../../firebase';

const ServiceHistory = () => {
  const [serviceHistory, setServiceHistory] = useState([]);

  useEffect(() => {
    const unsubscribePruebas = firebase.db.collection('pruebasdemanejo').onSnapshot((snapshot) => {
      const history = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServiceHistory(prev => [...prev, ...history]);
    });

    const unsubscribeCitas = firebase.db.collection('citas').onSnapshot((snapshot) => {
      const appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServiceHistory(prev => [...prev, ...appointments]);
    });

    return () => {
      unsubscribePruebas();
      unsubscribeCitas();
    };
  }, []);

  const renderPruebasItem = ({ item }) => (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemTitle}>Prueba de Manejo</Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Nombre: {item.nombre}</Text>
        <Text style={styles.subtitle}>Dia: {item.dia}</Text>
        <Text style={styles.subtitle}>Documento: {item.documento}</Text>
        <Text style={styles.subtitle}>Numero: {item.numero}</Text>
        <Text style={styles.subtitle}>Vehiculo de prueba: {item.VehiculoPrueba}</Text>
      </View>
    </View>
  );
  
  const renderCitasItem = ({ item }) => (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemTitle}>Cita Para Mantenimiento</Text>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Nombre: {item.name}</Text>
        <Text style={styles.subtitle}>Dia: {item.date}</Text>
        <Text style={styles.subtitle}>Hora: {item.time}</Text>
      </View>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Servicio</Text>
      <FlatList
        data={serviceHistory}
        renderItem={({ item }) => item.nombre ? renderPruebasItem({ item }) : renderCitasItem({ item })}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1dcaff',
    padding: 20,
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  listItemTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  subtitleContainer: {
    marginTop: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 3,
  },
});

export default ServiceHistory;