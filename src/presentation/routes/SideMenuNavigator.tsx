import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {StackNavigator} from './StackNavigator';
import {globalColors} from '../themes/theme';
import {useWindowDimensions, View} from 'react-native';

export type RootSideMenuParamList = {
  Profile: undefined;
  Settings: undefined;
  StackNavigator: undefined;
};

const Drawer = createDrawerNavigator<RootSideMenuParamList>();

export const SideMenuNavigator = () => {
  const windowDimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: windowDimensions.width >= 500 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.darkGraay,
        drawerActiveTintColor: globalColors.light,
        drawerInactiveTintColor: globalColors.dark,
        drawerItemStyle: {
          borderRadius: 10,
          paddingHorizontal: 10,
        },
      }}>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.lightGray,
          margin: 30,
          borderRadius: 10,
        }}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
