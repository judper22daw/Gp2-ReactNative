import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart } from 'react-native-charts-wrapper';

const Screen1 = () => {
    // Per defecte, quan entrem a aquesta vista sempre es mostrara la opcio de Poblacio
    const [selectedOption, setSelectedOption] = React.useState('Poblacio');
    const [chartData, setChartData] = React.useState([]);

    const data = require('./dades.json');
    const tableData = data[selectedOption];

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const handleChartButtonClick = () => {
        const chartData = Object.entries(tableData).map(([label, value]) => ({
            x: label,
            y: Number(value),
        }));
        setChartData(chartData);
    };

    const renderItem = ({ item }) => (
        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#CCCCCC' }}>
            <Text style={{ fontSize: 18, borderRightWidth: 1, paddingRight: 10, borderColor: '#CCCCCC', textAlign: 'left' }}>{item[0]}</Text>
            <Text style={{ fontSize: 16, textAlign: 'right' }}>{item[1]}</Text>
        </View>
    );

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

export default Screen1;
