//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {horizontalScale, verticalScale} from '../utill/metrices';

// create a component
const ItemShowList = ({image, rating, count, title, price}) => {
  return (
    <View style={styles.rootContainer}>
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
        <Text style={styles.textStyle}>{title}</Text>
        <Text style={styles.textStyle}>{price}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageStyle: {
    height: verticalScale(250),
    width: horizontalScale(200),
  },
  container: {
    alignItems: 'center',
    shadowColor:'black',
  },
  RatingText: {
    position: 'absolute',
    marginTop: verticalScale(270),
    backgroundColor: 'yellow',
    borderRadius: 30,
    flexDirection: 'row',
  },
  RatingTextStyle: {
    color: 'black',
    padding: 4,
  },
  titleTextAera: {
    
    marginTop: verticalScale(5),
  },
  textStyle: {
    color: 'black',
  },
})

//make this component available to the app
export default ItemShowList;
