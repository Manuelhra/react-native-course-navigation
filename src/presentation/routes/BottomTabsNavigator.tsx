import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';

import {Tab1Screen} from '../screens/tabs/Tab1SCreen';
import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {MaterialTopTabsNavigator} from './MaterialTopTabsNavigator';
import {IonIcon} from '../components/shared/IonIcon';
import {CustomTabIcon} from '../components/shared/CustomTabIcon';

type MaterialBottomTabsNavigatorProps = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
  Tab4: undefined;
};

const Tab =
  createMaterialBottomTabNavigator<MaterialBottomTabsNavigatorProps>();

export const MaterialBottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: '#000',
      }}>
      <Tab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          title: 'Inicio',
          tabBarIcon({focused}) {
            return (
              <IonIcon
                name={focused ? 'home' : 'home-outline'}
                size={20}
                color="white"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={MaterialTopTabsNavigator}
        options={{
          title: 'Buscar',
          tabBarIcon() {
            return <IonIcon name="search" size={20} color="white" />;
          },
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3Screen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({color, focused}) => (
            <CustomTabIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
              badgeCount={25}
              badgeColor="#cc5555" // Puedes cambiar este color como desees
            />
          ),
        }}
      />

      <Tab.Screen
        name="Tab4"
        component={Tab3Screen}
        options={{
          title: 'Settings',
          tabBarIcon({focused}) {
            return (
              <IonIcon
                name={focused ? 'person' : 'person-outline'}
                size={20}
                color="white"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
