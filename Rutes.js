import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from './screens/MainScreen';
import Contacte from './screens/Contacte';
import Informacio from './screens/RateApp';
import Home from './screens/Home';
import Dades from './screens/Dades';
import RateApp from './screens/RateApp';

const Drawer = createDrawerNavigator();

const Rutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Benvingut"
          component={MainScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="ios-menu" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Dades"
          component={Dades}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="ios-list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contacte"
          component={Contacte}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="ios-person" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Rate App"
          component={RateApp}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="ios-information-circle" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Rutes;