//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import ItemShowList from '../../components/itemShow';
import Header from '../../components/header';
import SearchCOmponenet from '../../components/searchComponet';

// create a component
const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const getProduct = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <FlatList
        data={products}
        stickyHeaderIndices={[0]}
        numColumns={2}
        ListHeaderComponent={<Header />}
        ListHeaderComponentStyle={<Header />}
        renderItem={({item, index}) => {
          return (
            <ItemShowList
              image={item.image}
              count={item.rating.count}
              price={item.price}
              rating={item.rating.rate}
              title={item.title}
            />
          );
        }}
      />
      <Button title="move on" onPress={() => navigation.navigate('Product')} />
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
