import {View, Text, Button} from 'react-native';
import React from 'react';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerParamList} from './drawer-navigation-demo';

type DrawerScreen2Props = {
  navigation: DrawerNavigationProp<DrawerParamList, 'DrawerScreen2'>;
};
const DrawerScreen2: React.FC<DrawerScreen2Props> = ({navigation}) => {
  return (
    <View>
      <Text>Drawer Screen 2</Text>
      <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
};

export default DrawerScreen2;
