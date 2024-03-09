//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utill/responsive/metrices';

// create a component
const SignIn = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.TextArea}>
          <Text style={styles.titleText}>Welcome</Text>
          <Text style={styles.smallText}>
            {' '}
            Sign up or Login with your Mobile number
          </Text>
        </View>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={1000}>
          <View>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter your Name"
              placeholderTextColor={'grey'}
            />

            <TextInput
              style={styles.TextInput}
              placeholder="Enter your Mobile number"
              placeholderTextColor={'grey'}
              keyboardType='numeric'
            />
          </View>
        </KeyboardAvoidingView>
        <View>
          <TouchableOpacity style={styles.PrimaryButton}>
            <Text style={styles.PrimmaryButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: moderateScale(24),
    color: '#2D2D2D',
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: moderateScale(14),
    color: '#2D2D2D',
  },
  TextArea: {
    marginTop: verticalScale(420),
    marginHorizontal: horizontalScale(20),
  },
  TextInput: {
    marginTop: verticalScale(23),
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 2,
    elevation: 1.4,
    color: 'black',
    marginHorizontal: horizontalScale(20),
    borderRadius: 7,
  },
  PrimaryButton: {
    backgroundColor: '#F7A399',
    width: horizontalScale(187),
    height: verticalScale(37),
    marginTop: verticalScale(26),
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 1,
    shadowColor: '#F7A399',
    shadowOpacity: 5,
  },
  PrimmaryButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default SignIn;
