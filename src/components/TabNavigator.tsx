import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../pages/HomePage';
import FavoritesPage from '../pages/FavoritesPage';
import HistoryPage from '../pages/HistoryPage';
import CatalogPage from '../pages/CatalogPage';
import {useTheme} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import ItemPage from '../pages/ItemPage';
import AppBar from './Appbar';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  const theme = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: theme.colors.primary,
      }}>
      <HomeStack.Screen
        name="homepage"
        component={HomePage}
        options={{headerTitle: () => <AppBar showSearch />}}
      />
      <HomeStack.Screen
        name="itempage"
        component={ItemPage}
        options={{headerTitle: () => <AppBar />}}
      />
    </HomeStack.Navigator>
  );
}

function TabNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      labeled={false}
      inactiveColor="#DDDCE0"
      activeColor={theme.colors.accent}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
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
