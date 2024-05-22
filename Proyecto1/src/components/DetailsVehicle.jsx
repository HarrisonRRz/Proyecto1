import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { Box } from 'native-base';
import VehicleContext from '../../context/vehicles/vehicleContext';
import globalStyles from '../styles/globalStyles';
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation} from '@react-navigation/native';

const DetailsVehicle = () => {
  // Traer el contexto de los datos del vehículo
  const { vehicle, saveVehicle } = useContext(VehicleContext);
  const { marca, descripcion, modelo, imagen, año, precio, condicion } = vehicle;

  // Se hace la navegacion
  const navigation = useNavigation();

  //Confirmar vehiculo
  const confirmVehicle =()=>{
    Alert.alert('¿Deseas confirmar este vehiculo?',
    'Una vez confirmado, se enviaran los datos de este vehiculo para la prueba.',
    [{
      text: 'Confirmar',
      onPress: () =>{
        const vehicles = {
          ...vehicle,
        }

        saveVehicle(vehicles)
        navigation.navigate('DrivingTest', { description: descripcion })
      }
    },
    {
      text:'Cancelar',
      style: 'cancel'
    }
  ])
  }

  // Verificar si vehicle es nulo antes de acceder a sus propiedades
  if (!vehicle) {
    return (
      <Box style={globalStyles.contenedor}>
        <Text>No se encontró información del vehículo.</Text>
      </Box>
    );
  }

  return (
    <Box style={globalStyles.contenedor}>
      <Text style={styles.titulo}>{marca}</Text>
      <Card>
        <Card.Cover source={{ uri: imagen }} />
        <Card.Content>
          <Text style={styles.subtitulo}>Modelo: {modelo}</Text>
          <Text style={styles.texto}>Año: {año}</Text>
          <Text style={styles.texto}>Condicion: {condicion}</Text>
          <Text style={styles.texto}>Precio: {precio}</Text>
          <Text style={styles.descripcion}>{descripcion}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={confirmVehicle}>
            <Text>Pedir Prueba de Manejo</Text>
          </Button>
        </Card.Actions>
      </Card>
    </Box>
  );
};

const styles = {
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000'
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 16,
    marginTop: 10,
  },
};

export default DetailsVehicle;