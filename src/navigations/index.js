import React, {useContext} from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

   console.log('isLoggedIn:', isLoggedIn);
   console.log('above command');

  return(
   <NavigationContainer>
     {
       isLoggedIn ? (<DrawerNavigator />) : (<AuthNavigator />)
     }    
    </NavigationContainer>
  ); 
};

export default AppNavContainer;