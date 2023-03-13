import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

const RateApp = () => {
  const [rating, setRating] = useState(0);

  const saveRating = (rating) => {
    // Funció per guardar la puntuació de l'usuari en algun lloc
    console.log(`Puntuació: ${rating}`);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <Text style={styles.title}>Share and help</Text>
      <Text style={styles.description}>Aquesta app està dissenyada per a aquells que volen ajudar a combatre la pobresa al món i fer una diferència significativa en la vida de les persones necessitades.</Text>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>Puntuació:</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          selectedStar={(rating) => setRating(rating)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => saveRating(rating)}>
        <Text style={styles.buttonText}>Envia la puntuació</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
  color: 'white',
  fontSize: 16,
  },
  });
  
  export default RateApp;