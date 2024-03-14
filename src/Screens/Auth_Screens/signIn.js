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
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../utill/color';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../utill/metrices';

// create a component
const SignIn = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.ImageStyle}>
          <Image
            style={styles.ImageDime}
            source={require('../../Image/user4x.png')}
            resizeMode="cover"
          />
        </View>
        <View style={styles.TextArea}>
          <Text style={styles.titleText}>Welcome</Text>
          <Text style={styles.smallText}>
            {' '}
            Sign up or Login with your Mobile number
          </Text>
        </View>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={1000}>
          <View>
            <View style={styles.TextInput}>
              <Icon name="email" color={Color.primayColor} size={22} />
              <TextInput
                // style={styles.TextInput}
                placeholder="Enter your Name"
                placeholderTextColor={'grey'}
                style={styles.inputTextColor}
              />
            </View>
            <View style={styles.TextInput}>
              <Icon name="lock" color={Color.primayColor} size={22} />
              <TextInput
                placeholder="Enter your Mobile number"
                placeholderTextColor={'grey'}
                keyboardType="numeric"
                style={styles.inputTextColor}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View>
          <TouchableOpacity
            style={styles.PrimaryButton}
            onPress={() => console.log('hello')}>
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
    marginTop: verticalScale(14),
    marginHorizontal: horizontalScale(20),
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
  PrimaryButton: {
    backgroundColor: Color.primayColor,
    width: horizontalScale(250),
    height: verticalScale(50),
    marginTop: verticalScale(26),
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 1,
    shadowColor: Color.primayColor,
    shadowOpacity: 5,
  },
  PrimmaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(45),
  },
  ImageDime: {
    height: verticalScale(350),
    width: horizontalScale(350),
  },
  inputTextColor: {
    color: 'black',
  },
});

//make this component available to the app
export default SignIn;
