import {View, Text, Button} from 'react-native';
import React from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from './drawer-navigation-demo';

type DrawerScreen1Props = {
  navigation: DrawerNavigationProp<DrawerParamList, 'DrawerScreen1'>;
};

const DrawerScreen1: React.FC<DrawerScreen1Props> = ({navigation}) => {
  return (
    <View>
      <Text>Drawer Screen 1</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default DrawerScreen1;
