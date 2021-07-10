import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import LogInComponent from '../../components/Login/index';

const Login = () => {
 const [value, onChangeText] = useState('');
 return(
    <LogInComponent />
 );
};

export default Login;
