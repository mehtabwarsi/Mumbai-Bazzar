import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Button} from 'react-native';
import {horizontalScale, verticalScale} from '../../utill/metrices';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../../Redux/Slices/WishListSlice';
import {addItemToCart} from '../../Redux/Slices/CartSlice';
import PrimaryButton from '../../utill/PrimaryButton';
// create a component
const ProductShow = ({navigation, route}) => {
  const dispatch = useDispatch();
  // console.log(route.params.data);
  const ImageSrc = route.params.data.image;
  const titleData = route.params.data.title;
  const PriceData = route.params.data.price;
  const DescriptionData = route.params.data.description;
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
          <Text style={styles.titleText}>${PriceData}</Text>
        </View>

        <View style={styles.descriptionStyle}>
          <Text style={styles.descriptionTitle}>Product Details</Text>
          <Text style={styles.descriptionText}>{DescriptionData}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={'Add to bag'}
            onPress={() => dispatch(addItemToCart(route.params.data))}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={'Wishlist'}
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
});

//make this component available to the app
export default ProductShow;
