import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Button} from 'react-native';
import {horizontalScale, verticalScale} from '../../utill/metrices';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../../Redux/Slices/WishListSlice';
import {addItemToCart} from '../../Redux/Slices/CartSlice';
// create a component
const ProductShow = ({navigation, route}) => {
  const dispatch = useDispatch();
  // console.log(route.params.data);
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
        <Button
          title="WishList"
          onPress={() => dispatch(addItemToWishList(route.params.data))}
        />
        <Button
          title="Cart"
          onPress={() => dispatch(addItemToCart(route.params.data))}
        />
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
