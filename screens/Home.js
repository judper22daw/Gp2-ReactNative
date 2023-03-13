import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Linking, Image } from 'react-native';

const Home = ({ navigation }) => {
    const handleVolunteerPress = () => {
        Linking.openURL('https://connectat.voluntariat.gencat.cat/entitats/detall/663/bona-voluntat-en-accio');
    };

    const handleDonatePress = () => {
        Linking.openURL('https://www.savethechildren.es/donacion-ong/donacion-pobreza-infantil');
        };

    return (
        <ImageBackground source={require('../assets/images/backgroundImage.jpg')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>SHARE AND HELP</Text>

            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 10, marginTop: 50, marginRight: 10, marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Algunes xifres impactants:</Text>
                <Text style={{ marginBottom: 10 }}>- Més de 700 milions de persones viuen en la pobresa extrema en tot el món.</Text>
                <Text style={{ marginBottom: 10 }}>- El 10% més ric del món posseeix el 85% de la riquesa global.</Text>
                <Text style={{ marginBottom: 10 }}>- Cada dia moren milers de nens per causes relacionades amb la pobresa.</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 10, marginTop: 20, marginRight: 10, marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Històries inspiradores:</Text>
                <Text style={{ marginBottom: 10 }}>- Conèixer la història de Laxmi, que va créixer en la pobresa a l'Índia i ara lidera una organització que ajuda a altres joves a sortir de la pobresa.</Text>
                <Text style={{ marginBottom: 10 }}>- Descobrir com la petita empresa social de Mama Hope va ajudar a construir una escola i una comunitat mèdica a Kenia.</Text>
            </View>

            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 10, marginTop: 20, marginRight: 10, marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Recursos educatius:</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Articles')}>
                    <Text style={{ marginBottom: 10 }}>- Articles sobre les causes i les possibles solucions per combatre la pobresa.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
                    <Text style={{ marginBottom: 10 }}>- Vídeos que expliquen el que és la pobresa i com afecta a les persones.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Books')}>
                    <Text style={{ marginBottom: 10 }}>- Llibres que poden ajudar a comprendre millor la pobresa i les possibles solucions.</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={handleVolunteerPress} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginRight: 10 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Voluntariat</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDonatePress} style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Donacions</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Home;