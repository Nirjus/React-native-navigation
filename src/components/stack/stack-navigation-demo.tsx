import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StackScreen1 from './stackScreen1';
import StackScreen2 from './stackScreen2';

export type StackParamsList = {
  StackScreen1: undefined;
  StackScreen2: {
    itemId: number;
  };
};

const Stack = createStackNavigator<StackParamsList>();

const StackNavigationDemo = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Stack Screen 1'}}
        name="StackScreen1"
        component={StackScreen1}
      />
      <Stack.Screen
        name="StackScreen2"
        component={StackScreen2}
        options={({route}) => ({title: `Item ${route.params.itemId}`})}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationDemo;
