import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Container from '../../components/common/Container/index';

const Contacts = () => {
 const {setOptions, toggleDrawer} = useNavigation();

 useEffect(() => {
  setOptions({headerLeft: () => (
    <TouchableOpacity onPress={() => {
      toggleDrawer();
    }}>
      <Text style={{padding: 10}}>NAV</Text>
    </TouchableOpacity>
  )})
 }, []);

 return(
    <Container>
     <Text>
       Contacts Component
     </Text>
    </Container>
 );
};

export default Contacts;