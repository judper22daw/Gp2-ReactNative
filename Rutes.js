import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from './screens/MainScreen';
import Contacte from './screens/Contacte';
import Home from './screens/Home';
import RatingScreen from './screens/RatingScreen';
// import TablaScreen from './screens/TablaScreen';
import Camera from './screens/Camera';
import Mapa from './screens/Map';
import { Dades } from './screens/Dades';

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
          name="Mapa"
          component={Mapa}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="ios-map" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Camera"
          component={Camera}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="camera-outline" color={color} size={size} />
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
          component={RatingScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="ios-star-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Rutes;