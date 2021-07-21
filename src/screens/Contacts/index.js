import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Container from '../../components/common/Container/index';
import Icon from '../../components/common/Icon';

const Contacts = () => {
 const {setOptions, toggleDrawer} = useNavigation();

 useEffect(() => {
  setOptions({headerLeft: () => (
    <TouchableOpacity onPress={() => {
      toggleDrawer();
    }}>
      <Icon type='material' style={{padding: 10}} size={25} name='menu' />
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