import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, PaperProvider } from 'react-native-paper';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de sesión</Text>
        <TextInput
          label="Email"
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
});

export default Login;
