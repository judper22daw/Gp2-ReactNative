import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/images/backgroundImage.jpg')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Pobresa Mundial</Text>
    </ImageBackground>
  );
};

export default MainScreen;
