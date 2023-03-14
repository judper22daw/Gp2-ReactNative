import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Home from './Home';

const MainScreen = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/images/world.jpg')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: -20 }}>SHARE AND HELP</Text>
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 10, marginTop: 50, marginRight: 10, marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Benvingut!</Text>
                <Text style={{ marginBottom: 10 }}>Benvingut/da a la nostra aplicació sobre la pobresa mundial. Aquesta app està dissenyada per a aquells que volen ajudar a combatre la pobresa al món i fer una diferència significativa en la vida de les persones necessitades.</Text>
                <Text style={{ marginBottom: 10 }}>Amb la nostra aplicació, podràs aprendre sobre els diferents problemes de la pobresa en diferents països i com les organitzacions no governamentals (ONGs) estan treballant per resoldre-los. També podràs fer donacions a través de la nostra aplicació i col·laborar amb diferents ONGs per ajudar a les persones més necessitades.</Text>
                <Text style={{ marginBottom: 10 }}>La nostra aplicació també ofereix una interfície intuïtiva i fàcil d'usar. Podràs navegar fàcilment a través de diferents seccions per aprendre sobre la pobresa en diferents països i com les donacions poden fer una diferència significativa en la vida de les persones. A més, la nostra aplicació et permet fer donacions segures i fiables a través de diferents opcions de pagament.</Text>
                <Text style={{ marginBottom: 10 }}>Finalment, la nostra aplicació també ofereix actualitzacions periòdiques sobre els esforços de les ONGs i els resultats que s'estan aconseguint gràcies a les donacions. Això et permetrà veure el progrés que es fa en la lluita contra la pobresa i la importància de les teves donacions.</Text>
                <Text style={{ marginBottom: 10 }}>En resum, la nostra aplicació és la millor manera de connectar amb diferents ONGs i fer una diferència significativa en la lluita contra la pobresa al món. Descarrega la nostra aplicació avui mateix i comença a fer un impacte positiu en el món.</Text>
                <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 20 }} onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Saber més</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default MainScreen;
