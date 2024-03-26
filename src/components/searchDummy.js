//import liraries
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  VirtualizedList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {verticalScale, horizontalScale} from '../utill/metrices';
// import {Color} from '../utill/color';

// create a component
const SearchDummy = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TextInput} onPress={onPress}>
        <Icon name="search" color={'black'} size={22} />
        <View style={styles.inputTextColor}>
          <Text style={{color: 'black'}}>Search item</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginBottom: verticalScale(30),
    paddingBottom: verticalScale(40),
    elevation:3
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
    // justifyContent:'center',
    alignItems: 'center',
    paddingLeft: 6,
    height: verticalScale(40),
    width: 'auto',
  },
  inputTextColor: {
    color: 'black',
  },
});

//make this component available to the app
export default SearchDummy;
