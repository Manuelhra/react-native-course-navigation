import React from 'react';
import {View, Text} from 'react-native';
import {
  type NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';

import {globalStyles} from '../../themes/theme';
import {PrimaryButton} from '../../components/PrimaryButton';
import {RootStackParamList} from '../../routes/StackNavigator';

export const SettingsScreen = () => {
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'Settings'>>();

  return (
    <View style={globalStyles.viewContainer}>
      <Text style={globalStyles.title}>SettingsScreen</Text>

      <PrimaryButton label="Return" onPress={() => navigation.goBack()} />
      <PrimaryButton
        label="Go to Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
