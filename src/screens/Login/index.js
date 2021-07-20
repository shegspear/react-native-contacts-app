import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useRoute} from '@react-navigation/native';

import LogInComponent from '../../components/Login/index';
import {GlobalContext} from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';

const Login = () => {
 const [form, setForm] = useState({});
 const [justSignedUp, setJustSignedUp] = useState(false);
 const {params} = useRoute();

 useEffect(() => {
  if(params?.data) {
    setJustSignedUp(true);
    setForm({...form, userName: params.data.username})
  }
 }, [params]);

 const {
   authDispatch, 
   authState: {error, loading},
  } = useContext(GlobalContext);

 const onSubmit = () => {
   if(form.userName && form.password) {
      loginUser(form)(authDispatch);
   }
 };

 const onChange = ({name, value}) => {
   setJustSignedUp(false);
    setForm({...form, [name]: value});
 };

 return(
   <LogInComponent
     onSubmit={onSubmit}
     onChange={onChange} 
     form={form} 
     error={error}
     loading={loading}
     justSignedUp={justSignedUp} 
   />
 );
};

export default Login;
