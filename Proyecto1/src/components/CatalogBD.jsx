import React, { useEffect, useState } from 'react';
import Firebase from '../../firebase/firebase';
import { Text, View, Image, Button } from 'native-base';

const CatalogBD = ({navigation}) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Función para obtener la información de Firebase
    const VehiclesBD = async () => {
      try {
        const vehicles = await Firebase.db.collection('vehiculos').doc('catalogo').get();
        if (vehicles.exists) {
          const data = vehicles.data();
          setCars(data); // Actualiza el estado con los datos obtenidos
        } else {
          console.log("El documento 'catalogo' no existe.");
        }
      } catch (error) {
        console.error('Error al obtener los vehículos:', error);
      }
    };

    // Llama a la función para obtener la información de Firebase
    VehiclesBD();
  }, []); // Se ejecuta la consulta solo una vez al cargar el componente

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Catálogo de Vehículos</Text>
      <Text>ID: {cars.id}</Text>
      <Text>Descripción: {cars.descripcion}</Text>
      <Image
        source={{ uri: cars.imageUrl }}
        style={{ width: 400, height: 200 }}
        accessibilityLabel="Imagen del vehículo"
      />
      <Text>Marca: {cars.marca}</Text>
      <Text>Precio: {cars.precio}</Text>
      <Button onPress={()=> navigation.navigate('Introduction')}>
        <Text>Ir a Introducción</Text>
      </Button>
    </View>
  );
};

export default CatalogBD;