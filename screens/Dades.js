import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart } from 'react-native-charts-wrapper';
import SQLite from 'react-native-sqlite-storage';

const Dades = () => {
    const [selectedOption, setSelectedOption] = React.useState('Poblacio');
    const [chartData, setChartData] = React.useState([]);

    const [tableData, setTableData] = React.useState({});

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const handleChartButtonClick = () => {
        const chartData = Object.entries(data[selectedOption]).map(([label, value]) => ({
            x: label,
            y: Number(value),
        }));
        setChartData(chartData);
    };

    React.useEffect(() => {
        // Configurar la conexión a la base de datos SQLite
        SQLite.openDatabase(
            { name: 'myAppDB.db', location: 'default' },
            () => { },
            error => {
                console.log(error);
            }
        ).then(db => {
            // Crear la tabla en la base de datos si no existe
            db.transaction(tx => {
                tx.executeSql(
                    `CREATE TABLE IF NOT EXISTS dades (
                        pais TEXT PRIMARY KEY,
                        ${selectedOption.toLowerCase()} TEXT
                    );`
                );
            });

            // Leer los datos del archivo JSON y ejecutar una sentencia SQL INSERT para insertar cada fila en la tabla
            Object.entries(data[selectedOption]).forEach(([pais, valor]) => {
                db.transaction(tx => {
                    tx.executeSql(
                        `INSERT OR REPLACE INTO dades (pais, ${selectedOption.toLowerCase()}) VALUES (?, ?);`,
                        [pais, valor],
                        (tx, res) => {
                            console.log(`Se ha insertado una fila en la tabla ${selectedOption} para el país ${pais}`);
                        },
                        error => {
                            console.log(error);
                        }
                    );
                });
            });
        });
    }, [selectedOption]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10, borderWidth: 1, borderColor: '#CCCCCC' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Dades de diferents països</Text>
            <Picker
                selectedValue={selectedOption}
                onValueChange={handleOptionChange}
                style={{ width: '100%' }}>
                <Picker.Item label="Població" value="Poblacio" />
                <Picker.Item label="PIB" value="Pib" />
            </Picker>
            <FlatList
                data={Object.entries(tableData)}
                renderItem={renderItem}
                keyExtractor={(item) => item[0]}
                style={{ borderTopWidth: 1, borderColor: '#CCCCCC' }}
            />
            {chartData.length > 0 && (
                <View style={{ height: 200 }}>
                    <LineChart
                        data={{ dataSets: [{ label: selectedOption, values: chartData }] }}
                        xAxis={{ position: 'BOTTOM' }}
                        yAxis={{ position: 'LEFT' }}
                        style={{ flex: 1 }}
                    />
                </View>
            )}
            <TouchableOpacity onPress={handleChartButtonClick} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginTop: 10 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Veure gràfic</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Dades;
