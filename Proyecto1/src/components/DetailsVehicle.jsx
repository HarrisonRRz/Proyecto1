import React, { useContext } from 'react';
import { Box } from 'native-base';
import VehiculoContext from '../../context/vehiculos/vehiculoContext';
import globalStyles from '../styles/globalStyles';
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const DetailsVehicle = () => {
  // Traer el contexto de los datos del vehículo
  const { vehicle } = useContext(VehiculoContext);
  const { marca, descripcion, modelo, imagen, año, precio, condicion } = vehicle;

  // Se hace la navegacion
  const navigation = useNavigation();

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
          <Button onPress={() => navigation.navigate('DrivingTest')}>
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