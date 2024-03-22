//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// Tab screens
import Home from '../Screens/Tab_Navigators/Home';
import Cart from '../Screens/Tab_Navigators/Cart';
import Notification from '../Screens/Tab_Navigators/Notification';
import Profile from '../Screens/Tab_Navigators/Profile';
// stack
import StackNaviagtion from './Stack_NAviagtion';

// create a component

const TabNaviagtion = () => {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#F7A399',
          tabBarHideOnKeyboard: true,
          // initialRouteName: 'Home',
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
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifiction"
          component={Notification}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="bell" color={color} size={size} />
            ),
          }}
        />
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
