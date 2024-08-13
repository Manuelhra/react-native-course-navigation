import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {HomeScreen} from '../screens/home/HomeScreen';

const Tab = createMaterialTopTabNavigator();

export const MaterialTopTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
