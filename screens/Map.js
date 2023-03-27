import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const PovertyMap = () => {
    const [markers, setMarkers] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleMapPress = (event) => {
        const newMarker = {
            coordinate: event.nativeEvent.coordinate,
            title,
            description
        };
        setMarkers([...markers, newMarker]);
        setTitle("");
        setDescription("");
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} onPress={handleMapPress}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="Pobreza mundial"
                    description="Este es un punto relacionado con la pobreza mundial"
                />
                <Marker
                    coordinate={{
                        latitude: 33.290056,
                        longitude: -4.685835,
                    }}
                    title="Bulman, Marruecos"
                    description="Punt relacionat amb la pobressa"
                />
            </MapView>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Títol"
                    value={title}
                    onChangeText={setTitle}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descripció"
                    value={description}
                    onChangeText={setDescription}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => setMarkers([])}>
                <Text style={styles.buttonText}>Esborrar marcadors</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    form: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
});

export default PovertyMap;
