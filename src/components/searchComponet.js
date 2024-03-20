//import liraries
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {verticalScale, horizontalScale} from '../utill/metrices';
// import {Color} from '../utill/color';

// create a component
const SearchCOmponenet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TextInput}>
        <Icon name="search" color={'black'} size={22} />
        <TextInput
          // style={styles.TextInput}
          placeholder="search item"
          placeholderTextColor={'grey'}
          style={styles.inputTextColor}
          onFocus={() => console.log('hello')}
          // navigate the screen when foucs 
        />
      </View>
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
    // justifyContent:'center',
    alignItems: 'center',
    paddingLeft: 6,
  },
  inputTextColor: {
    color: 'black',
  },
});

//make this component available to the app
export default SearchCOmponenet;
