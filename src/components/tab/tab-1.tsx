import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TabScreen1 = () => {
  return (
    <View style={styles.container}>
      <Text>TabScreen1</Text>
    </View>
  );
};

export default TabScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
