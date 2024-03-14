//import liraries
import React from 'react';
import {View, TextInput, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { verticalScale,horizontalScale } from '../utill/metrices';
// import {Color} from '../utill/color';

// create a component
const SearchDummy = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TextInput} onPress={onPress}>
        <Icon name="search" color={'black'} size={22} />
        <TextInput
          // style={styles.TextInput}
          placeholder="Enter your Name"
          placeholderTextColor={'grey'}
          style={styles.inputTextColor}
        />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  TextInput: {
    marginTop: verticalScale(23),
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 2,
    elevation: 1.4,
    marginHorizontal: horizontalScale(20),
    borderRadius: 7,
    flexDirection: 'row',
    // justifyContent:'center',
    alignItems: 'center',
    paddingLeft: 6,
  },
  inputTextColor: {
    color: 'black',
  },
});

//make this component available to the app
export default SearchDummy;
