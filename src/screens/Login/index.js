import React, {useState, useContext} from 'react';
import {View, Text, TextInput} from 'react-native';

import LogInComponent from '../../components/Login/index';
import {GlobalContext} from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';

const Login = () => {
 const [form, setForm] = useState({});
 const {
   authDispatch, 
   authState: {error, loading},
  } = useContext(GlobalContext);

 const onSubmit = () => {
   if(form.userName && form.password) {
      console.log('44:>>', 44);
      loginUser(form)(authDispatch);
   }
 };

 const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
 };

 return(
   <LogInComponent
     onSubmit={onSubmit}
     onChange={onChange} 
     form={form} 
     error={error}
     loading={loading} 
   />
 );
};

export default Login;
