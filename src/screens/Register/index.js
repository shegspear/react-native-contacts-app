import React, {useState, useEffect, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import RegisterComponent from '../../components/Signup/index';
import envs from '../../config/env';
import axios from '../../helpers/axiosInterceptor';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {LOGIN} from '../../constants/RouteNames';

const Register = () => {
 const [form, setForm] = useState({});
 const {navigate} = useNavigation();
 const [errors, setErrors] = useState({});
 const {
   authDispatch, 
   authState: {error, loading, data},
  } = useContext(GlobalContext);

  useEffect(() => {
    if(data) {
      navigate(LOGIN)
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
     if(data || error) {
       clearAuthState()(authDispatch) 
     } 
    }, [data, error]),
  );


  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if(value !== '') {

      if(name === 'password') {

        if(value.length < 5) {
          setErrors(prev => {return {...prev, [name]: `Password needs min of 5 characters`}});
        } else {
          setErrors(prev => {return {...prev, [name]: null}});
        };

      } else {
        setErrors(prev => {return {...prev, [name]: null}});
      };
      
    } else {
      setErrors(prev => {return {...prev, [name]: `This field is required`}});
    };
  };

  const onSubmit = () => {
    // validation
    // console.log('form: >>', form);

    if(!form.userName) {
      setErrors(prev => {return {...prev, userName: 'Please add a username'}});
    }

    if(!form.firstName) {
      setErrors(prev => {return {...prev, firstName: 'Please add a first name'}});
    }

    if(!form.lastName) {
      setErrors(prev => {return {...prev, lastName: 'Please add a last name'}});
    }

    if(!form.email) {
      setErrors(prev => {return {...prev, email: 'Please add an email'}});
    }

    if(!form.password) {
      setErrors(prev => {return {...prev, password: 'Please add a password'}});
    }

    if(
      Object.values(form).length === 5 && 
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
      console.log(form)
    }

  };

 return(
   <RegisterComponent 
     onSubmit={onSubmit}
     onChange={onChange} 
     form={form} 
     errors={errors}
     error={error}
     loading={loading} 
    />
 );
};

export default Register; 