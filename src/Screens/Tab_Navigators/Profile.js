//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import ProfilePage from '../../components/profilePage';
import SignIn from '../Auth_Screens/signIn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PrimaryButton from '../../utill/PrimaryButton';
// create a component
const Profile = () => {
  const navigation = useNavigation();

  const logOut = async () => {
    try {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
      await AsyncStorage.removeItem('my-key');
      navigation.navigate('signIn');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <PrimaryButton title={'Log out'} onPress={()=> logOut()} />
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
