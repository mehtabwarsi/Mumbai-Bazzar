//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../utill/metrices';

// create a component
const CartShow = ({
  image,
  rating,
  count,
  title,
  price,
  onPress,
  qty,
  qtyAdd,
  qtyRemove,
}) => {
  let star = String.fromCodePoint(9733);
  let combine = rating + star;
  return (
    <View style={styles.rootContainer} onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainerStyle}>
          <Image
            source={{uri: image}}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
      </View>
      {/* end this line */}
      <View style={styles.titleTextAera}>
        <Text style={styles.textStyle}>{title.substring(0, 11)}</Text>
        <Text style={styles.textStyle}>${price}</Text>
      </View>
      <View style={styles.RatingText}>
        <Text style={[styles.starColor, styles.RatingTextStyles]}>
          {combine}
        </Text>
        <Text style={styles.RatingTextStyle}>|</Text>
        <Text style={styles.RatingTextStyle}>{count}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            height: 20,
            width: 20,
            borderColor: 'black',
            borderWidth: 1,
            alignItems: 'center',
            margin: 10,
          }}
          onPress={qtyRemove}>
          <Text style={styles.textStyle}>-</Text>
        </TouchableOpacity>
        <View
          style={{
            height: 20,
            width: 20,
            alignItems: 'center',
            margin: 10,
          }}>
          <Text style={styles.textStyle}>{qty}</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 20,
            width: 20,
            borderColor: 'black',
            borderWidth: 1,
            alignItems: 'center',
            margin: 10,
          }}
          onPress={qtyAdd}>
          <Text style={styles.textStyle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    height: verticalScale(300),
    width: horizontalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: verticalScale(150),
    width: horizontalScale(150),
    // backgroundColor:Color.primayColor
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  RatingText: {
    // position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    width: 'auto',
    height: verticalScale(30),
    elevation: 2,
    paddingHorizontal: 10,
  },
  RatingTextStyle: {
    color: 'black',
    padding: 4,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleTextAera: {
    padding: 2,
    alignContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontWeight: '700',
  },
  starColor: {
    color: 'green',
    padding: 4,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default CartShow;
