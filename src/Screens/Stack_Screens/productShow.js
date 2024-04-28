import React, {Component, useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Button} from 'react-native';
import {horizontalScale, verticalScale} from '../../utill/metrices';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToWishList} from '../../Redux/Slices/WishListSlice';
import {addItemToCart} from '../../Redux/Slices/CartSlice';
import PrimaryButton from '../../utill/PrimaryButton';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';
// create a component
const ProductShow = ({navigation, route}) => {
  const dispatch = useDispatch();
  const wishData = useSelector(state => state.wishList.data);
  const cartData = useSelector(state => state.cart.data);
  const ImageSrc = route.params.data.image;
  const titleData = route.params.data.title;
  const PriceData = route.params.data.price;
  const ratingdata = route.params.data.rating.rate;
  console.log(ratingdata);
  const DescriptionData = route.params.data.description;
  // it use for testing purpose
  const data = route.params.data;
  if (wishData.includes(data)) {
    console.log('have it');
  } else {
    console.log('it not have');
  }


  return (
    <ScrollView style={styles.rootConatiner}>
      <View style={styles.container}>
        <View style={styles.ImageConnaier}>
          <Image
            source={{uri: ImageSrc}}
            style={styles.imageStyle}
            resizeMode="contain"
          />
          {/* <View style={styles.withlisticon}>
            <Icon name="email" color={'red'} size={22} />
          </View> */}
        </View>
        <View style={styles.titleTextStyle}>
          <Text style={styles.titleText}>{titleData}</Text>
        </View>
        <View style={styles.ratingWithPrice}>
          <Text style={styles.titleText}>${PriceData}</Text>
          <AirbnbRating count={ratingdata} size={16} showRating={false} />
        </View>

        <View style={styles.descriptionStyle}>
          <Text style={styles.descriptionTitle}>Product Details</Text>
          <Text style={styles.descriptionText}>{DescriptionData}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={cartData.includes(data) ? 'Go to bag' : 'Add to cart'}
            onPress={() => dispatch(addItemToCart(route.params.data))}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={wishData.includes(data) ? 'Wishlisted' : 'Wishlist'}
            onPress={() => dispatch(addItemToWishList(route.params.data))}
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
  container: {},
  imageStyle: {
    height: verticalScale(300),
    width: horizontalScale(200),
  },
  ImageConnaier: {
    alignItems: 'center',
    padding: 10,
  },
  titleTextStyle: {
    paddingHorizontal: 20,
  },
  titleText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionStyle: {
    height: 'auto',
    width: 'auto',
    borderWidth: 0.4,
    borderColor: 'black',
    borderRadius: 20,
    margin: 10,
  },
  descriptionText: {
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  descriptionTitle: {
    color: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: verticalScale(10),
  },
  withlisticon: {
    position: 'absolute',
  },
  ratingWithPrice: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default ProductShow;
