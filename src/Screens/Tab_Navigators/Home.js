//import liraries
import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Dimensions, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ItemShowList from '../../components/itemShow';
import Header from '../../components/header';
import {addProducts} from '../../Redux/Slices/ProductsSlice';

// create a component
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  // console.log(products);

  // useCallback from api
  const fetchData = useCallback(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        dispatch(addProducts(json));
      });
  }, [dispatch]);
  // const getProduct = () => {};
  // useCallback function calls

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <FlatList
        data={products}
        stickyHeaderIndices={[0]}
        initialNumToRender={7}
        numColumns={2}
        ListHeaderComponent={
          <Header onPress={() => navigation.navigate('Search-Screen')} />
        }
        // ListHeaderComponentStyle={<Header />}
        renderItem={({item, index}) => {
          return (
            <ItemShowList
              image={item.image}
              count={item.rating.count}
              price={item.price}
              rating={item.rating.rate}
              title={item.title}
              onPress={() => navigation.navigate('Product-Page', {data: item})}
            />
          );
        }}
      />
      {/* <Button title="move on" onPress={() => navigation.navigate('Product')} /> */}
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
