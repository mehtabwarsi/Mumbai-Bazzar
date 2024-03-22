import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {horizontalScale, verticalScale} from '../../utill/metrices';

// create a component
const ProductShow = ({navigation, route}) => {
  console.log(route.params.data);
  const ImageSrc = route.params.data.image;
  return (
    <ScrollView style={styles.rootConatiner}>
      <View style={styles.container}>
        <View>
          <Image
            source={{uri: ImageSrc}}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
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
  imageStyle: {
    height: verticalScale(300),
    width: horizontalScale(200),
  },
});

//make this component available to the app
export default ProductShow;
