import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import Contacte from './screens/Contacte';
import Informacio from './screens/Informacio';
import Home from './screens/Home';
import Dades from './screens/Dades';

const Drawer = createDrawerNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="Dades" component={Dades} />
        <Drawer.Screen name="Contacte" component={Contacte} />
        <Drawer.Screen name="Informacio" component={Informacio} />
        <Drawer.Screen name="Home2" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
