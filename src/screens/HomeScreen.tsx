import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../root-navigator';

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Stack Navigation demo"
        onPress={() => navigation.navigate('StackDemo')}
      />
      <Button
        title="Tab Navigation demo"
        onPress={() => navigation.navigate('TabDemo')}
      />
      <Button
        title="Drawer Navigation demo"
        onPress={() => navigation.navigate('DrawerDemo')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
