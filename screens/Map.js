import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Mapa = () => {
    const [markers, Marcadors] = useState([]);
    const [title, Titol] = useState("");
    const [description, Descripcio] = useState("");

    const MapaPress = (event) => {
        const newMarker = {
            coordinate: event.nativeEvent.coordinate,
            title,
            description
        };
        Marcadors([...markers, newMarker]);
        Titol("");
        Descripcio("");
    };

    return (
        <View style={styles.container}>
            <MapView style={styles.map} onPress={MapaPress}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
                <Marker // Marcadors per defecte. Es veuran sempre que s'obri el mapa.
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="Pobressa mundial"
                    description="Pobressa mundial"
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
                    onChangeText={Titol}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descripció"
                    value={description}
                    onChangeText={Descripcio}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Marcadors([])}>
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

export default Mapa;
