import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

const Camera = () => {
    const [images, setImages] = useState([]);

    const handleCameraButton = async () => {
        let result = await ImagePicker.launchCameraAsync();
        if (!result.cancelled) {
            setImages([...images, result]);
        }
    };

    const handleGalleryButton = async () => {
        let result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
            setImages([...images, result]);
        }
    };

    const renderImage = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.uri }} resizeMode="cover" />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="camera" size={24} color="black" />
                <Text style={styles.headerText}>Les meves fotos</Text>
            </View>
            <FlatList
                style={styles.imageList}
                data={images}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                renderItem={renderImage}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleCameraButton}>
                    <Text style={styles.buttonText}>Càmera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleGalleryButton}>
                    <Text style={styles.buttonText}>Galeria</Text>
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        /*color: '#1e88e5',*/
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1e88e5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginHorizontal: 10,
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
