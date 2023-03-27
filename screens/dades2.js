import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS datos (id INTEGER PRIMARY KEY AUTOINCREMENT, pais TEXT, indicador TEXT, valor REAL);'
      );
    }, error => console.log(error.message), () => console.log('Tabla creada'));

    loadData();
  }, []);

  function loadData() {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM datos;', [], (_, { rows: { _array } }) => {
        setData(_array);
      });
    }, error => console.log(error.message));
  }

  function addData() {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO datos (pais, indicador, valor) VALUES (?, ?, ?);', ['Estados Unidos', 'Índice de Pobreza Multidimensional', 0.003]);
    }, error => console.log(error.message), () => loadData());
  }

  function updateData() {
    db.transaction(tx => {
      tx.executeSql('UPDATE datos SET valor = ? WHERE pais = ?;', [0.002, 'Alemania']);
    }, error => console.log(error.message), () => loadData());
  }

  function deleteData() {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM datos WHERE pais = ?;', ['España']);
    }, error => console.log(error.message), () => loadData());
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addData} style={styles.button}>
        <Text>Agregar datos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={updateData} style={styles.button}>
        <Text>Actualizar datos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteData} style={styles.button}>
        <Text>Eliminar datos</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.pais}</Text>
            <Text style={styles.text}>{item.indicador}</Text>
            <Text style={styles.text}>{item.valor}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  text: {
    fontSize: 16
  }
});
