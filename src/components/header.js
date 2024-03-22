//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchCOmponenet from '../Screens/Stack_Screens/searchComponet';
import SearchDummy from './searchDummy';

// create a component
const Header = ({onPress}) => {
  return <SearchDummy onPress={onPress} />;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

//make this component available to the app
export default Header;
