import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';

import {globalStyles} from '../../themes/theme';
import {PrimaryButton} from '../../components/PrimaryButton';
import {RootStackParamList} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'Home'>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text style={{color: 'black'}}>Menu</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={globalStyles.viewContainer}>
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products')}
      />

      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
