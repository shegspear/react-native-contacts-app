import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import RegisterComponent from '../../components/Signup/index';
import envs from '../../config/env';
import axiosInstance from '../../helpers/axiosInterceptor';

const Register = () => {
 const [form, setForm] = useState({});
 const [errors, setErrors] = useState({});
 
  useEffect(() => {
    axiosInstance.post('/contacts').catch((err) => {
     console.log('err', err.response);
    });
  }, []);

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
    console.log('form: >>', form);

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

  };

 return(
   <RegisterComponent 
     onSubmit={onSubmit}
     onChange={onChange} 
     form={form} 
     errors={errors} 
    />
 );
};

export default Register; 