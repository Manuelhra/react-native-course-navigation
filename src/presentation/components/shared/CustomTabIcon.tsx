import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Badge} from 'react-native-paper';
import {IonIcon} from './IonIcon';

interface CustomTabIconProps {
  name: string;
  color: string;
  badgeCount: number;
  badgeColor?: string;
}

export const CustomTabIcon: React.FC<CustomTabIconProps> = ({
  name,
  color,
  badgeCount,
  badgeColor,
}) => (
  <View style={styles.container}>
    <IonIcon name={name} size={24} color={color} />
    {badgeCount > 0 && (
      <Badge
        size={20}
        style={[styles.badge, {backgroundColor: badgeColor || 'red'}]}>
        {badgeCount}
      </Badge>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
  },
});
