//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProfilePage from '../../components/profilePage';
// create a component
const Profile = () => {
  const navigation = useNavigation();
  return <ProfilePage />;
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
