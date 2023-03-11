import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Contacte = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
    // Aquí podrías agregar lógica para enviar el formulario
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacte</Text>
      <Text style={styles.subtitle}>Envia'ns un correu electrònic:</Text>
      <Text style={styles.email}>contacte@exemple.com</Text>
      <Text style={styles.subtitle}>O truca'ns:</Text>
      <Text style={styles.phone}>+34 123 456 789</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nom"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Correu electrònic"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Missatge"
          multiline={true}
          numberOfLines={4}
          onChangeText={setMessage}
          value={message}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1c2731',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  phone: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1e88e5',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Contacte;

//npx expo start
