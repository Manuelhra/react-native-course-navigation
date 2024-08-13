import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {globalColors, globalStyles} from '../themes/theme';
import {type RootStackParamList} from '../routes/StackNavigator';

export const ProductScreen = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'Product'>>();
  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'Product'>>();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params.name]);

  return (
    <View style={globalStyles.viewContainer}>
      <Text style={globalStyles.title}>Product Screen</Text>
      <Text style={{color: globalColors.dark}}>
        Product ID: {params.id} - Product Name: {params.name}
      </Text>
      <Text style={{color: globalColors.secondary, fontWeight: '500'}}>
        Price: {params.price}
      </Text>
    </View>
  );
};
