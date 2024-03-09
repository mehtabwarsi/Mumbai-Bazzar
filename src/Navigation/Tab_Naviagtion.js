//import liraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Tab screens
import Home from '../Screens/Tab_Navigators/Home';
import Cart from '../Screens/Tab_Navigators/Cart';
import Notification from '../Screens/Tab_Navigators/Notification';
import Profile from '../Screens/Tab_Navigators/Profile';

// create a component

const TabNaviagtion = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Notifiction"
          component={Notification}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default TabNaviagtion;
