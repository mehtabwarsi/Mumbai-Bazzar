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
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../../utill/color';
import PrimaryButton from '../../utill/PrimaryButton';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../utill/metrices';
// create a component
const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  // const [name ,setName] = useState('')

  const addUser = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        email: email,
        password: pass,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  // using the email and password firebase
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.TextArea}>
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
              <Icon name="account-circle" color={Color.primayColor} size={22} />
              <TextInput
                value={name}
                placeholder="Name"
                placeholderTextColor={'grey'}
                style={styles.inputTextColor}
                onChangeText={txt => setName(txt)}
              />
            </View>
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
            {/* <View style={styles.TextInput}>
              <Icon name="lock" color={Color.primayColor} size={22} />
              <TextInput
                value={pass}
                placeholder=" confirm password"
                placeholderTextColor={'grey'}
                keyboardType="numeric"
                style={styles.inputTextColor}
                onChangeText={txt => setPass(txt)}
              />
            </View> */}
          </View>
        </KeyboardAvoidingView>
        {/* primary button */}
        <View style={styles.PrimaryButtonStyle}>
          {/* <PrimaryButton title={'Sign up'} onPress={() => addUser()} /> */}
          <PrimaryButton title={'Sign up'} onPress={() => signUp()} />
        </View>
      </View>
      <View style={styles.TextBottm}>
        <Text style={styles.smallText}>Already have account ? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.signUpText}>SignIn</Text>
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
  inputTextColor: {
    color: 'black',
  },
  signUpText: {
    color: Color.primayColor,
    fontWeight: '500',
  },
  TextBottm: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
});

//make this component available to the app
export default SignUp;
