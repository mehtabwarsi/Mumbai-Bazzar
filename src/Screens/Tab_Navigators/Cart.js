//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ItemShowList from '../../components/itemShow';
import SearchItemShow from '../../components/searchItemShow';
import {useNavigation} from '@react-navigation/native';
import CartShow from '../../components/CartShow';
import {
  addItemToCart,
  reduceItemfromCart,
  removeItemfromCart,
} from '../../Redux/Slices/CartSlice';

// create a component
const Cart = () => {
  // console.log(itemData)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const items = useSelector(state => state.cart.data);
  // console.log(items.length === 0);
  return (
    <View style={styles.container}>
      {/* here is applay a one image to add bag */}
      {items.length === 0 ? (
        <Image
          source={require('../../Image/emptyCart.png')}
          resizeMode="contain"
          style={{height: '100%', width: '100%'}}
        />
      ) : null}
      <FlatList
        data={items}
        key={items.id}
        // numColumns={2}
        renderItem={({item, index}) => {
          return (
            <CartShow
              image={item.image}
              count={item.rating.count}
              price={item.price}
              rating={item.rating.rate}
              title={item.title}
              qty={item.qty}
              qtyAdd={() => dispatch(addItemToCart(item))}
              qtyRemove={() => {
                if (item.qty > 1) {
                  dispatch(reduceItemfromCart(item));
                } else {
                  dispatch(removeItemfromCart(index));
                }
              }}
              onPress={() => navigation.navigate('Product-Page', {data: item})}
            />
          );
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
  },
  qtystyle: {
    flexDirection: 'row',
  },
});

//make this component available to the app
export default Cart;
