//import liraries
import React, {useState} from 'react';
import {View, TextInput, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {verticalScale, horizontalScale} from '../../utill/metrices';
// import {Color} from '../utill/color';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// scrreens
import SearchItemShow from '../../components/searchItemShow';

const SearchCOmponenet = () => {
  const products = useSelector(state => state.product.data);
  // console.log(JSON.stringify(products));
  const [search, setSearch] = useState('');
  const [oldData, setOlddata] = useState(products);
  const [searchedList, setSearchedList] = useState(oldData);

  // navigation hooks
  const navigation = useNavigation();

  // search matching function which in use
  const filterData = txt => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(txt.toLowerCase());
    });
    setSearchedList(newData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.TextInput}>
        <Icon name="search" color={'black'} size={22} />
        <TextInput
          // style={styles.TextInput}
          value={search}
          placeholder="search item"
          placeholderTextColor={'grey'}
          style={styles.inputTextColor}
          onChangeText={txt => {
            setSearch(txt);
            filterData(txt);
          }}
        />
        {search !== '' && (
          <Icon
            onPress={() => {
              setSearch('');
              filterData('');
            }}
            name={'cancel'}
            color={'black'}
            size={22}
          />
        )}
      </View>
      <FlatList
        data={searchedList}
        initialNumToRender={7}
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
    marginBottom: verticalScale(30),
    paddingBottom: verticalScale(40),
  },
  TextInput: {
    marginTop: verticalScale(23),
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 2,
    elevation: 4,
    marginHorizontal: horizontalScale(20),
    borderRadius: 30,
    flexDirection: 'row',
    height: verticalScale(40),
    width: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingLeft: 6,
  },
  inputTextColor: {
    color: 'black',
  },
});

//make this component available to the app
export default SearchCOmponenet;
