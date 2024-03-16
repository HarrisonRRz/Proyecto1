import React from 'react'
import { ScrollView } from 'react-native'
import Vehicle from './Vehicle';

const VehicleList = ({ vehicles }) => {
  return (
    <ScrollView>
        {vehicles.map((vehicle) => (
            <Vehicle
                key={vehicle.id}
                urlImagen={vehicle.imageUrl}
                description={vehicle.description}
                price={vehicle.price}
                condition={vehicle.condition}
            />
        ))}
    </ScrollView>
    );
};

export default VehicleList;