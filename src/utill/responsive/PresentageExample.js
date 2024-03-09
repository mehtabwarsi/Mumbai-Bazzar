import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const PercentageExample = () => {
  return (
    <View style={styles.conatainer}>
      <View style={styles.viewOne}>
        <Text> View 1 </Text>
      </View>
      <View style={styles.viewTwo}>
        <Text> View 2 </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    // flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  viewOne: {
    width: '45%',
    backgroundColor: 'blue',
  },
  viewTwo: {
    width: '75%',
    backgroundColor: 'pink',
  },
});

export default PercentageExample;
