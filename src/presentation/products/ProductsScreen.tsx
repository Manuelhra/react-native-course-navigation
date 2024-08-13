import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../themes/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../components/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParamList} from '../routes/StackNavigator';

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const productList = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 400,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 500,
    },
    {
      id: 6,
      name: 'Product 6',
      price: 600,
    },
    {
      id: 7,
      name: 'Product 7',
      price: 700,
    },
    {
      id: 8,
      name: 'Product 8',
      price: 800,
    },
  ];

  return (
    <View style={globalStyles.viewContainer}>
      <Text style={globalStyles.title}>Product List</Text>

      <FlatList
        data={productList}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
                price: item.price,
              })
            }
          />
        )}
      />

      <Text>Settings</Text>

      <PrimaryButton
        label="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
