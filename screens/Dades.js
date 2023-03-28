import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart } from 'react-native-charts-wrapper';
// import { Dades } from './Database';
import * as SQLite from 'expo-sqlite';
import { ScrollView } from 'react-native-gesture-handler';

export class Dades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            poblacion: [],
            pib: [],
            continente: '',
            cantidad: ''
        };
        this.db = SQLite.openDatabase("db.db");

        // POBLACION
        // Insertar datos a la tabla Poblacion (Asia)
        this.db.transaction(
            tx => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS poblacion (id INTEGER PRIMARY KEY AUTOINCREMENT, continente TEXT, cantidad REAL)');
                // tx.executeSql('DELETE FROM poblacion');
                // console.log('Contingut eliminat de la tabla POBLACION');
                tx.executeSql('SELECT * FROM poblacion', [], (_, { rows }) => {
                    if (rows._array.length === 0) {
                        tx.executeSql('INSERT INTO poblacion (continente, cantidad) VALUES (?, ?)', ['Asia', 4753500631]);
                        tx.executeSql('INSERT INTO poblacion (continente, cantidad) VALUES (?, ?)', ['Africa', 1440353360]);
                        tx.executeSql('INSERT INTO poblacion (continente, cantidad) VALUES (?, ?)', ['America', 1046571635]);
                        tx.executeSql('INSERT INTO poblacion (continente, cantidad) VALUES (?, ?)', ['Europa', 747089798]);
                        tx.executeSql('INSERT INTO poblacion (continente, cantidad) VALUES (?, ?)', ['Oceania', 44284912]);
                        tx.executeSql('INSERT INTO poblacion (continente, cantidad) VALUES (?, ?)', ['Antartida', 4490]);
                        console.log('Información de POBLACION insertada con éxito');
                    }
                });
            }, (err) => console.log(err), () => {
                // Agregar una promesa para esperar a que se completen las inserciones antes de hacer la consulta
                this.db.transaction(tx => {
                    tx.executeSql("SELECT * FROM poblacion", [], (_, { rows }) => {
                        this.setState({ poblacion: rows._array })
                    });
                });
            }
        );

        // PIB
        // Insertar datos a la tabla Pib
        this.db.transaction(
            tx => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS pib (id INTEGER PRIMARY KEY AUTOINCREMENT, continente TEXT, porcentaje REAL)');
                // tx.executeSql('DELETE FROM pib');
                // console.log('Contingut eliminat de la tabla PIB');
                tx.executeSql('SELECT * FROM pib', [], (_, { rows }) => {
                    if (rows._array.length === 0) {
                        tx.executeSql('INSERT INTO pib (continente, porcentaje) VALUES (?, ?)', ['Asia', 38.78]);
                        tx.executeSql('INSERT INTO pib (continente, porcentaje) VALUES (?, ?)', ['America', 28.22]);
                        tx.executeSql('INSERT INTO pib (continente, porcentaje) VALUES (?, ?)', ['Europa', 24.73]);
                        tx.executeSql('INSERT INTO pib (continente, porcentaje) VALUES (?, ?)', ['Africa', 2.84]);
                        tx.executeSql('INSERT INTO pib (continente, porcentaje) VALUES (?, ?)', ['Oceania', 2.00]);
                        console.log('Información de PIB insertada con éxito');
                    }
                });
            }, (err) => console.log(err), () => {
                // Agregar una promesa para esperar a que se completen las inserciones antes de hacer la consulta
                this.db.transaction(tx => {
                    tx.executeSql("SELECT * FROM pib", [], (_, { rows }) => {
                        this.setState({ pib: rows._array })
                    });
                });
            }
        );

    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20, marginTop: 20, textAlign: 'center' }}>Dades del Món</Text>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', marginBottom: 20, marginTop: 20, textAlign: 'center' }}>Població </Text>
                    <FlatList
                        data={this.state.poblacion}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.row}>
                                <Text style={[styles.column, { textAlign: 'center' }]}>{item.continente}</Text>
                                <Text style={[styles.column, { textAlign: 'center' }]}>{item.cantidad}</Text>
                                <TouchableOpacity onPress={() => this.eliminarPoblacion(item.id)}>
                                    <Text style={[styles.column, { textAlign: 'center' }]}>Eliminar</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        ListHeaderComponent={
                            <View style={styles.row}>
                                <Text style={[styles.column, { fontWeight: 'bold', textAlign: 'center'}]}>Continente</Text>
                                <Text style={[styles.column, { fontWeight: 'bold', textAlign: 'center'}]}>Cantidad</Text>
                                <Text style={[styles.column, { fontWeight: 'bold', textAlign: 'center' }]}></Text>
                            </View>
                        }
                    />
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20, marginTop: 20 }}>Insertar población:</Text>
                        <TextInput
                            placeholder="Continente"
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                            onChangeText={continente => this.setState({ continente })}
                            value={this.state.continente}
                        />
                        <TextInput
                            placeholder="Cantidad"
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
                            onChangeText={cantidad => this.setState({ cantidad })}
                            value={this.state.cantidad}
                            keyboardType="numeric"
                        />
                        <Button
                            title="Insertar"
                            onPress={() => this.insertarPoblacion()}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }


    eliminarPoblacion = (id) => {
        this.db.transaction(
            tx => {
                tx.executeSql('DELETE FROM poblacion WHERE id = ?', [id]);
            },
            null,
            // Después de eliminar el registro, actualizar el estado de la aplicación con los nuevos resultados
            () => {
                this.db.transaction(tx => {
                    tx.executeSql("SELECT * FROM poblacion", [], (_, { rows }) => {
                        this.setState({ poblacion: rows._array })
                    });
                });
            }
        );
    }

    eliminarPib = (id) => {
        this.db.transaction(
            tx => {
                tx.executeSql('DELETE FROM pib WHERE id = ?', [id]);
            },
            null,
            // Después de eliminar el registro, actualizar el estado de la aplicación con los nuevos resultados
            () => {
                this.db.transaction(tx => {
                    tx.executeSql("SELECT * FROM pib", [], (_, { rows }) => {
                        this.setState({ pib: rows._array })
                    });
                });
            }
        );
    }

    insertarPoblacion = (continente, cantidad) => {
        this.db.transaction(
            tx => {
                tx.executeSql('INSERT INTO poblacion (continente, cantidad) VALUES (?, ?)', [continente, cantidad]);
            }, (err) => console.log(err), () => {
                this.db.transaction(tx => {
                    tx.executeSql("SELECT * FROM poblacion", [], (_, { rows }) => {
                        this.setState({ poblacion: rows._array })
                    });
                });
            }
        );
    }

    insertarPib = (continente, porcentaje) => {
        this.db.transaction(
            tx => {
                tx.executeSql('INSERT INTO pib (continente, porcentaje) VALUES (?, ?)', [continente, porcentaje]);
            }, (err) => console.log(err), () => {
                this.db.transaction(tx => {
                    tx.executeSql("SELECT * FROM pib", [], (_, { rows }) => {
                        this.setState({ pib: rows._array })
                    });
                });
            }
        );
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    column: {
        flex: 1,
        textAlign: 'center',
    },
});
