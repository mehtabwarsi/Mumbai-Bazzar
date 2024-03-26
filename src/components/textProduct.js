//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import image from '../Image/user4x.png';
import {horizontalScale, verticalScale} from '../utill/metrices';

// create a component
const TestProduct = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{alignContent: 'center', elevation: 10}}>
        <View style={styles.imageStyle} >
          <Image
            source={require('../Image/user4x.png')}
            style={styles.imageDime}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.productName}>pant</Text>
          <Text style={styles.productPrice}>price</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageStyle: {
    elevation:20
  },
  imageDime: {
    height: verticalScale(150),
    width: horizontalScale(150),
  },
  productPrice: {
    color: 'black',
  },
  productName: {
    color: 'black',
  },
});

//make this component available to the app
export default TestProduct;
