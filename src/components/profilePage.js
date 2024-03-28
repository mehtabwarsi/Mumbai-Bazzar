//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>ProfilePage</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

//make this component available to the app
export default ProfilePage;
