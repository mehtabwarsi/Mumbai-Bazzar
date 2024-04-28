/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/Redux/Store/store';

import TabNaviagtion from './src/Navigation/Tab_Naviagtion';
import SignIn from './src/Screens/Auth_Screens/signIn';
import SignUp from './src/Screens/Auth_Screens/signup';
import SearchCOmponenet from './src/Screens/Stack_Screens/searchComponet';
import SearchDummy from './src/components/searchDummy';
import ItemShowList from './src/components/itemShow';
import {NavigationContainer} from '@react-navigation/native';
import StackNaviagtion from './src/Navigation/Stack_NAviagtion';
import SearchItemShow from './src/components/searchItemShow';
import TestProduct from './src/components/textProduct';
// screens
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNaviagtion />
      </NavigationContainer>
    </Provider>
    // <BadgeIcon/>/
  );
}

export default App;
