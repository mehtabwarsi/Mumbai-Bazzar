import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FlexboxExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Text> View 1 </Text>
      </View>
      <View style={styles.centerView}>
        <Text> View 2 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});

export default FlexboxExample;
