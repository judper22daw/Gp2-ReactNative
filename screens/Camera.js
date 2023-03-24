import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

const Camera = () => {
    const [images, setImages] = useState([]); // Nuevo estado para las imágenes

    // Función para manejar el botón de subir foto desde la cámara
    const handleCameraButton = async () => {
        let result = await ImagePicker.launchCameraAsync(); // Lanza la cámara
        if (!result.cancelled) { // Si la imagen no se cancela, la agrega al array de imágenes
            setImages([...images, result]);
        }
    };

    // Función para manejar el botón de subir foto desde la galería
    const handleGalleryButton = async () => {
        let result = await ImagePicker.launchImageLibraryAsync(); // Lanza la galería
        if (!result.cancelled) { // Si la imagen no se cancela, la agrega al array de imágenes
            setImages([...images, result]);
        }
    };

    // Función para renderizar cada elemento de la lista
    const renderImage = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.uri }} resizeMode="cover" />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.imageList}
                data={images}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                renderItem={renderImage}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleCameraButton}>
                    <Text style={styles.buttonText}>Subir foto desde la cámara</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleGalleryButton}>
                    <Text style={styles.buttonText}>Subir foto desde la galería</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    imageList: {
        flex: 1,
        width: '100%',
    },
    imageContainer: {
        flex: 1,
        aspectRatio: 1,
        margin: 2,
    },
    image: {
        flex: 1,
    },
});

export default Camera;