import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Vehicle = ({urlImagen, description, price, condition}) => {
  return (
    <View>
        <Image
            source={{uri:urlImagen}}
            style={styles.image}
        />
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{price}</Text>
        <Text style={styles.text}>{condition}</Text>
    </View>
  )
}
const styles= StyleSheet.create({

    image:{
        width:400,
        height:200,
    },
    text:{
        backgroundColor: "black",
        fontSize: 25,
        color: "white"
    }
})

export default Vehicle;