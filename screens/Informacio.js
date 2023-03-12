import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Informacio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>La Pobreza Mundial</Text>
      <Image
        source={require('../assets/images/pobressa.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        La pobreza es una de las mayores problemáticas sociales a nivel mundial.
        Actualmente, se estima que más de 700 millones de personas viven en
        situación de extrema pobreza, lo que significa que tienen que sobrevivir
        con menos de 1,90 dólares al día.
      </Text>
      <Text style={styles.text}>
        La pobreza no solo afecta a la economía de los países más pobres, sino
        que también tiene consecuencias negativas en la salud, la educación y la
        calidad de vida de las personas. Por esta razón, es importante concienciar
        sobre la importancia de erradicar la pobreza y buscar soluciones para
        garantizar el acceso a los recursos básicos para todas las personas.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
    color: '#333',
  },
});

export default Informacio;

//npx expo start
