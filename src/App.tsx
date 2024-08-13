// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MD3DarkTheme as DefaultTheme, PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    notification: 'blue', // Este será el color del badge
  },
};

import React from 'react';
// import {StackNavigator} from './presentation/routes/StackNavigator';
// import {MaterialBottomTabsNavigator} from './presentation/routes/BottomTabsNavigator';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider
        theme={theme}
        settings={{
          icon: props => <Ionicons {...props} />,
        }}>
        <SideMenuNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
};
