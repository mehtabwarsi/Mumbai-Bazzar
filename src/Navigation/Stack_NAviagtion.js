//import liraries
import React, {useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from '../Screens/Tab_Navigators/Home';
import ProductShow from '../Screens/Stack_Screens/productShow';
import TabNaviagtion from './Tab_Naviagtion';
import SearchCOmponenet from '../Screens/Stack_Screens/searchComponet';
// auth screens
import SignIn from '../Screens/Auth_Screens/signIn';
import SignUp from '../Screens/Auth_Screens/signup';
import TabBarHeader from '../utill/tabBatStyle';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Color} from '../utill/color';
// create a component
const StackNaviagtion = () => {
  // cart selector for items count
  const items = useSelector(state => state.cart);
  const numberOfItems = items.data.length;
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="HomeScreen"
        component={TabNaviagtion}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product-Page"
        component={ProductShow}

      />
      <Stack.Screen name="Search-Screen" component={SearchCOmponenet} />
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{headerBackVisible: false, headerTitleAlign: 'center'}}
      />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default StackNaviagtion;
