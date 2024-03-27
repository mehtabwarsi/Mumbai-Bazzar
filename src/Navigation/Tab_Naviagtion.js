//import liraries
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
// Tab screens
import Home from '../Screens/Tab_Navigators/Home';
import Cart from '../Screens/Tab_Navigators/Cart';
import Wishlist from '../Screens/Tab_Navigators/WishList';
import Profile from '../Screens/Tab_Navigators/Profile';
import {Color} from '../utill/color';

// create a component

const TabNaviagtion = () => {
  // cart selector for items count
  const items = useSelector(state => state.cart);
  const numberOfItems = items.data.length;
  // console.log('from cart', items);
  // console.log('from cart', numberOfItems);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F7A399',
        tabBarHideOnKeyboard: true,
        initialRouteName: 'Home',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cart" color={color} size={size} />
          ),
          tabBarBadge: numberOfItems,
          tabBarBadgeStyle: {
            backgroundColor: Color.primayColor,
            color: 'white',
          },
        }}/>

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

//make this component available to the app
export default TabNaviagtion;
