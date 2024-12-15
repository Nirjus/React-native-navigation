import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamsList} from './stack-navigation-demo';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type StackScreenNavigationProp = StackNavigationProp<
  StackParamsList,
  'StackScreen2'
>;
type StackScreen2RouteProp = RouteProp<StackParamsList, 'StackScreen2'>;
const StackScreen2 = () => {
  const navigation = useNavigation<StackScreenNavigationProp>();
  const router = useRoute<StackScreen2RouteProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>StackScreen2</Text>
      <Text style={styles.text}>ItemId: {router.params.itemId}</Text>

      <Button
        title="Go to Stack Screen 1"
        onPress={() => navigation.navigate('StackScreen1')}
        color="green"
      />
    </View>
  );
};

export default StackScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'SpaceMono',
    fontSize: 20,
    margin: 10,
  },
});
