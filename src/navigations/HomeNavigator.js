import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';

import {CONTACT_LIST, CONTACT_DETAIL, SETTINGS, CREATE_CONTACT} from '../constants/RouteNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName='Contacts'>
          <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen> 
          <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails}></HomeStack.Screen> 
          <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen> 
          <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>  
        </HomeStack.Navigator>
    );
};

export default HomeNavigator
