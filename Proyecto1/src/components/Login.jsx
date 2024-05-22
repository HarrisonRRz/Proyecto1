import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingresa tu usuario y contraseña.');
      return;
    }

    if (email === 'Usuario1' && password === 'Usuario123') {
      navigation.navigate('Introduction');
    } else {
      setErrorMessage('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de sesión</Text>
        <TextInput
          label="Usuario"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Iniciar sesión
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#80ffff',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: 'black'
  },
  input: {
    marginBottom: 10,
    width: '100%',
  },
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#ffffff'
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
