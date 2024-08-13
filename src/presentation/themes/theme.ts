import {StyleSheet} from 'react-native';

export const globalColors = {
  primary: '#f0f',
  secondary: '#0ff',
  tertiary: '#ff0',
  success: '#0f0',
  warning: '#ff0',
  danger: '#f00',
  dark: '#000',
  light: '#fff',
  lightGray: '#e5dfdf',
  darkGraay: '#a9a9a9',
  background: '#13bcbf',
};

export const globalStyles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: globalColors.background,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: globalColors.dark,
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    padding: 10,
    borderRadius: 15,
    marginBottom: 5,
  },
  buttonText: {
    color: globalColors.light,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
