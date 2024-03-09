//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Profile</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
  },
});

//make this component available to the app
export default Profile;
