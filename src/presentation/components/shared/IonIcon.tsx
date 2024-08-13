import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface IonIconProps {
  size?: number;
  name: string;
  color?: string;
}

export const IonIcon: React.FC<IonIconProps> = props => {
  return <Icon {...props} />;
};
