//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../utill/metrices';

// create a component
const SearchItemShow = ({title, description, price, onPress, imageSrc}) => {
  return (
    <TouchableOpacity style={styles.rootContainer} onPress={onPress}>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <Image
            source={{uri: imageSrc}}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          <View style={styles.textArea}>
            <Text style={styles.titleStyle}>{title.substring(0, 11)}</Text>
            <Text style={styles.titleStyle}>
              {description.substring(0, 11)}
            </Text>
            <Text style={styles.titleStyle}>${price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textArea: {
    marginHorizontal: horizontalScale(20),
  },
  imageStyle: {
    height: verticalScale(100),
    width: horizontalScale(100),
  },
  titleStyle: {
    color: 'black',
  },
});

//make this component available to the app
export default SearchItemShow;
