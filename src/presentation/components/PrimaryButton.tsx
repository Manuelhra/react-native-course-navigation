import React from 'react';
import {Text, Pressable} from 'react-native';

import {globalStyles} from '../themes/theme';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
}) => {
  return (
    <Pressable onPress={() => onPress()} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
