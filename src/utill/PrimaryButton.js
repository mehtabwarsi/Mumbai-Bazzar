//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {verticalScale, horizontalScale} from './metrices';
import {Color} from './color';

// create a component
const PrimaryButton = ({onPress, title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.PrimaryButton} onPress={onPress}>
        <Text style={styles.PrimmaryButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  PrimaryButton: {
    backgroundColor: Color.primayColor,
    width: horizontalScale(250),
    height: verticalScale(50),
    // marginTop: verticalScale(26),
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 1,
    shadowColor: Color.primayColor,
    shadowOpacity: 5,
  },
  PrimmaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default PrimaryButton;
