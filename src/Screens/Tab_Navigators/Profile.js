//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// create a component
const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Profile</Text>
      <Button title="signup" onPress={() => navigation.navigate('signIn')} />
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
