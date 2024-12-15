import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerScreen1 from './drawer-1';
import DrawerScreen2 from './drawer-2';

export type DrawerParamList = {
  DrawerScreen1: undefined;
  DrawerScreen2: undefined;
};
const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigationDemo: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
      <Drawer.Screen name="DrawerScreen2" component={DrawerScreen2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationDemo;
