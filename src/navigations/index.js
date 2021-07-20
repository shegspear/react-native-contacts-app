import React, {useContext, useState, useEffect} from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  // set this state as a clean up for memory leaks from useEfect calling async functions
  // notification vanished like that, massive grin you cocky prick
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {

    try {
      const user = await AsyncStorage.getItem('user');

      if(user) {
        setAuthLoaded(true);

        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);
      }

    } catch (error) {
      
    }

  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  // console.log('isLoggedIn:', isAuthenticated);

  return(
   <>
    {
      authLoaded ? (
        <NavigationContainer>
          {
            isAuthenticated ? (
             <DrawerNavigator />
             ) : (
             <AuthNavigator />
             )
          }    
        </NavigationContainer>
      ) : (
        <ActivityIndicator/>
      )
    }
   </>
  ); 
};

export default AppNavContainer;