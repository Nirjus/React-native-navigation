import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabScreen1 from './tab-1';
import TabScreen2 from './tab-2';

export type BottomTabParams = {
  TabScreen1: undefined;
  TabScreen2: undefined;
};
const Tabs = createBottomTabNavigator<BottomTabParams>();

export default function TabNavigationDemo() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="TabScreen1" component={TabScreen1} />
      <Tabs.Screen name="TabScreen2" component={TabScreen2} />
    </Tabs.Navigator>
  );
}
