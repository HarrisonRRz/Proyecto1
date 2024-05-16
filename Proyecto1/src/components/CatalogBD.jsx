import React, {useContext, useEffect, useState, Fragment} from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import FirebaseContext from '../../context/firebase/firebaseContext';
import VehiculoContext from '../../context/vehiculos/vehiculoContext';
import { NativeBaseProvider, ScrollView, View, Image } from 'native-base';
import { Text, List, Button } from 'react-native-paper';

const CatalogBD = ()=>{
  //contexto de firebase
  const {catalog, bringVehicles} = useContext(FirebaseContext)
  const {selectVehicle} = useContext(VehiculoContext)
  const navigation = useNavigation()

  // Llamar a obtenerVehiculos cuando el componente se monte
  useEffect(() => {
    bringVehicles();
  }, []);

  const mostrarHeading = (categoria, i) =>{

    if(i>0){
      const categoriaAnterior = categoria[i-1].categoria;
      if(categoriaAnterior !== categoria){
        return(        
          <View style={style.separador}>
            <Text style={style.separadortexto}>{categoria}</Text>
          </View>
        )
      }      
    }else{
      return(        
        <View style={style.separador}>
          <Text style={style.separadortexto}>{categoria}</Text>
        </View>
      )
    }
  }

  return (
    <NativeBaseProvider style={globalStyles.contenedor}>
      <ScrollView style={{ backgroundColor: '#ffffff'}}>
        <View>
          {catalog.map((vehicle, i)=>{
            const {id, descripcion, imagen, marca,} = vehicle
            return (
              <Fragment key={id}>
                {mostrarHeading(marca, i)}
                <View 
                style={style.itemContainer}
                >
                <Image alt="Vehiculo" source={{uri: imagen}} style={style.image}></Image>
                <List.Item
                title={<Text style={style.title}>{marca}</Text>}
                description={<Text style={style.description}>{descripcion}</Text>}
                onPress={ ()=>{
                selectVehicle(vehicle);
                navigation.navigate("DetailsVehicle")
                }}
                style={style.listItem}
                > 
                <Text>{marca}</Text>
                <Text
                note
                numberOfLines={2}
                >
                {descripcion}</Text>
                </List.Item>
                </View>
              </Fragment>
            )
          })}
        </View>
      </ScrollView>
    </NativeBaseProvider>
  )
}

const style = StyleSheet.create({
  separador:{
    backgroundColor: '#000'
    
  },
  separadortexto:{
    color: '#00ffb3',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
  },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 190,
    height: 150,
    marginRight: 10,
  },
  listItem: {
    flex: 1,
  },
  title: {
    fontWeight: "bold", // Hacer el título en negrita
    color: '#00ff95'
  },
  description: {
    fontWeight: "bold", // Poner el texto en negrita
    color: '#000000'
  },
})

export default CatalogBD;