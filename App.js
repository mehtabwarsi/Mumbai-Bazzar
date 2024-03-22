/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import TabNaviagtion from './src/Navigation/Tab_Naviagtion';
import SignIn from './src/Screens/Auth_Screens/signIn';
import SignUp from './src/Screens/Auth_Screens/signup';
import SearchCOmponenet from './src/components/searchComponet';
import SearchDummy from './src/components/searchDummy';
import ItemShowList from './src/components/itemShow';
import {NavigationContainer} from '@react-navigation/native';
import StackNaviagtion from './src/Navigation/Stack_NAviagtion';
function App() {
  return (
    <NavigationContainer>
      <StackNaviagtion />
    </NavigationContainer>
  );
}

export default App;
