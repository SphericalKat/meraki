import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../pages/HomePage';
import FavoritesPage from '../pages/FavoritesPage';
import HistoryPage from '../pages/HistoryPage';
import CatalogPage from '../pages/CatalogPage';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator labeled={false} inactiveColor="#c29199">
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Catalog"
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="grid" color={color} size={22} />
          ),
        }}
        component={CatalogPage}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarIcon: 'heart',
        }}
        component={FavoritesPage}
      />
      <Tab.Screen
        name="History"
        options={{
          tabBarIcon: 'clock',
        }}
        component={HistoryPage}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
