//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../utill/metrices';

// create a component
const ItemShowList = ({image, rating, count, title, price, onPress}) => {
  return (
    <TouchableOpacity style={styles.rootContainer} onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{uri: image}}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </View>
      {/* absoute value area */}
      <View style={styles.RatingText}>
        <Text style={styles.RatingTextStyle}>{rating}</Text>
        <Text style={styles.RatingTextStyle}>&#9733;</Text>
        <Text style={styles.RatingTextStyle}>|</Text>
        <Text style={styles.RatingTextStyle}>{count}</Text>
      </View>
      {/* end this line */}
      <View style={styles.titleTextAera}>
        <Text style={styles.textStyle}>{title.substring(0, 11)}</Text>
        <Text style={styles.textStyle}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    backgroundColor: 'white',
    padding: 1,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  imageStyle: {
    height: verticalScale(250),
    width: horizontalScale(200),
  },
  container: {
    alignItems: 'center',
  },
  RatingText: {
    position: 'absolute',
    marginTop: verticalScale(200),
    backgroundColor: 'yellow',
    borderRadius: 30,
    flexDirection: 'row',
  },
  RatingTextStyle: {
    color: 'black',
    padding: 4,
  },
  titleTextAera: {
    marginTop: verticalScale(15),
    padding: 2,
  },
  textStyle: {
    color: 'black',
  },
});

//make this component available to the app
export default ItemShowList;
