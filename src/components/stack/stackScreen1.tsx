import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamsList} from './stack-navigation-demo';

type StackScreenNavigationProp = StackNavigationProp<
  StackParamsList,
  'StackScreen1'
>;

const StackScreen1 = () => {
  const navigation = useNavigation<StackScreenNavigationProp>();
  return (
    <View>
      <Text>StackScreen1</Text>
      <Button
        title="Go to Stack Screen 2"
        onPress={() => navigation.navigate('StackScreen2', {itemId: 132})}
      />
    </View>
  );
};

export default StackScreen1;

const styles = StyleSheet.create({});
