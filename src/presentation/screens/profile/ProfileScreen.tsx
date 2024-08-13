import React from 'react';
import {View, Text} from 'react-native';
import {globalColors} from '../../themes/theme';
import {PrimaryButton} from '../../components/PrimaryButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MaterialBottomTabsNavigator} from '../../routes/BottomTabsNavigator';

export const ProfileScreen = () => {
  const navigation = useNavigation();

  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: globalColors.dark,
        paddingHorizontal: 10,
        paddingTop: top,
      }}>
      <Text>ProfileScreen</Text>
      <PrimaryButton
        label="Go to Home"
        onPress={() =>
          navigation.dispatch(DrawerActions.jumpTo('StackNavigator'))
        }
      />

      <MaterialBottomTabsNavigator />
    </View>
  );
};
