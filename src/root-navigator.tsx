import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StackNavigationDemo from './components/stack/stack-navigation-demo';
import TabNavigationDemo from './components/tab/tan-navigation-demo';
import DrawerNavigationDemo from './components/drawer/drawer-navigation-demo';

export type RootStackParamList = {
  Home: undefined;
  StackDemo: undefined;
  TabDemo: undefined;
  DrawerDemo: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StackDemo" component={StackNavigationDemo} />
      <Stack.Screen name="TabDemo" component={TabNavigationDemo} />
      <Stack.Screen name="DrawerDemo" component={DrawerNavigationDemo} />
    </Stack.Navigator>
  );
}
