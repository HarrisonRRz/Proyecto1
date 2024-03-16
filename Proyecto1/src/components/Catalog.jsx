import React from 'react'
import VehicleList from './VehicleList';

const Catalog = () => {
    const vehicles = [
    {
        id: 1,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/2005_Subaru_Impreza_WRX_STI%2C_Front_Left%2C_06-20-2020.jpg',
        description: 'Subaru WRX 2005',
        price: 'Precio: 20000',
        condition: 'Usado: Disponible',
    },
    {
        id: 2,
        imageUrl: 'https://img.remediosdigitales.com/821a99/subaru-wrx-sti-diamond-edition-2019-43-/1366_521.jpg',
        description: 'Subaru WRX 2023',
        price: 'Precio: 30000',
        condition: 'Nuevo: Disponible',
    },
    {
        id: 3,
        imageUrl: 'https://soymotor.com/sites/default/files/2023-10/subaru-wrx-tr-2024-soymotor.jpg',
        description: 'Subaru WRX 2024',
        price: 'Precio: 40000',
        condition: 'Nuevo: Disponible',
    },
    {
        id: 4,
        imageUrl: 'https://www.f1latam.com/autos/img/prin/sub_cro_01.jpg',
        description: 'Subaru Crosstrek 2024',
        price: 'Precio: 50000',
        condition: 'Nuevo: Disponible',
    }
]

return <VehicleList vehicles={vehicles} />;
};

export default Catalog;