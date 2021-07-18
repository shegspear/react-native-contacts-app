import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Container from '../common/Container/index';
import CustomButton from '../common/CustomButton/index';
import Input from '../common/Input/index';
import {REGISTER} from '../../constants/RouteNames';
import Message from '../common/Message/index.js';

import styles from './styles';

const LoginComponent = () => {
    const {navigate} = useNavigation();
    return(
       <Container>
            <Image 
              source={require('../../assets/images/logo.png')}
              style={styles.logoImage}
            />

            <View>
              <Text style={styles.title}>Welcome to RN Contacts App</Text>
              <Text style={styles.subTitle}>Please login here</Text>

              <Message 
                retry 
                retryFn={() => {console.log('120')}} 
                primary
                onDismiss={() => {console.log('close tab')}} 
                message='invalid credentials' 
              />
              <Message onDismiss={() => {console.log('close tab')}}  danger message='invalid credentials' />
              <Message onDismiss={() => {console.log('close tab')}}  info message='invalid credentials' />
              <Message onDismiss={() => {console.log('close tab')}}  success message='invalid credentials' />

              <View style={styles.form}>
                <Input
                    label="Username"
                    iconPosition='right'
                    placeholder={'Enter Username'}
                    //   error={'This field is required'}
                />

                <Input
                    label="Password"
                    placeholder={'Enter Password'}
                    secureTextEntry={true}
                    icon={<Text>Show</Text>}
                    iconPosition='right'
                />

                <CustomButton primary title='Submit' />

                <View style={styles.createSection}>
                  <Text style={styles.infoText}>Need a new account ? </Text>

                  <TouchableOpacity onPress={() => navigate(REGISTER)}>
                   <Text style={styles.linkBio}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
        
        </Container>
    );
};

export default LoginComponent;