//import liraries
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Dimensions, Image} from 'react-native';

// create a component
const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const getProduct = () => {
    fetch('ttps://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <View style={styles.productItem} key={index}>
              <Image source={{uri: item.image}} style={styles.ImageStyle} />
            </View>
          );
        }}
      />
    </View>
  );
};

// define your stylesho
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  ImageStyle: {
    width: 100,
    height: 100,
  },
});

//make this component available to the app
export default Home;
