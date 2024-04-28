//import liraries
import React, {useState} from 'react';
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
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../utill/color';
import PrimaryButton from '../../utill/PrimaryButton';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../utill/metrices';

// create a component
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  // Login function
  const login = () => {
    firestore()
      .collection('Users')
      // Filter results
      .where('email', '==', email)
      .where('password', '==', pass)
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot.docs[0]);
      });
  };
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
                value={email}
                placeholder="email"
                placeholderTextColor={'grey'}
                style={styles.inputTextColor}
                onChangeText={txt => setEmail(txt)}
              />
            </View>
            <View style={styles.TextInput}>
              <Icon name="lock" color={Color.primayColor} size={22} />
              <TextInput
                value={pass}
                placeholder="password"
                placeholderTextColor={'grey'}
                keyboardType="numeric"
                style={styles.inputTextColor}
                onChangeText={txt => setPass(txt)}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        {/* primary button */}
        <View style={styles.PrimaryButtonStyle}>
          <PrimaryButton title={'Log In'} onPress={() => login()} />
        </View>
        {/* primary button */}
        {/* divider area */}
        <View style={styles.ORText}>
          <Text style={styles.smallText}>OR</Text>
        </View>
        {/* scocial meadia Log in */}
        <View style={styles.SocailButton}>
          <Icon name="facebook" size={30} color={'#4267B2'} />
          <Icon name="google" size={30} color={'#4267B2'} />
          <Icon name="email" size={30} color={'#4267B2'} />
        </View>
        {/* scocial meadia Log in */}
      </View>
      {/* Don't hanve an acount sign up */}
      <View style={styles.SignupText}>
        <Text style={styles.smallText}>Don't have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
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
  PrimaryButtonStyle: {
    marginTop: verticalScale(26),
  },
  ImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(45),
  },
  ImageDime: {
    height: verticalScale(250),
    width: horizontalScale(250),
  },
  inputTextColor: {
    color: 'black',
  },
  ORText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  SocailButton: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: verticalScale(20),
    flexDirection: 'row',
    marginHorizontal: horizontalScale(110),
  },
  signUpText: {
    color: Color.primayColor,
    fontWeight: '500',
  },
  SignupText: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginTop: verticalScale(70),
    marginTop: 'auto',
    paddingVertical: verticalScale(4),
  },
});

//make this component available to the app
export default SignIn;
