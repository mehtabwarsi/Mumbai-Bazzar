import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

// create a component
const ProductShow = () => {
  return (
    <ScrollView style={styles.rootConatiner}>
      <View style={styles.container}>
        <Text>hello</Text>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ProductShow;
