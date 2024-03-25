//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
// import ItemShowList from '../../components/itemShow';
import SearchItemShow from '../../components/searchItemShow';
import {useNavigation} from '@react-navigation/native';

// create a component
const Wishlist = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.wishList);
  console.log('from wishList', JSON.stringify(items) + ' ' + items.data.length);
  // const [wishListItems, setWishListItems] = useState(items.data);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>color</Text>
      <FlatList
        data={items.data}
        key={items.data.id}
        renderItem={({item, index}) => {
          return (
            <SearchItemShow
              imageSrc={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
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
});

//make this component available to the app
export default Wishlist;
