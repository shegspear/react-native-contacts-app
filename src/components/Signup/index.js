import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Container from '../common/Container/index';
import CustomButton from '../common/CustomButton/index';
import Input from '../common/Input/index';
import {LOGIN} from '../../constants/RouteNames';

import styles from './styles';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  errors,
}) => {
    const {navigate} = useNavigation();
    return(
       <Container>
            <Image 
              source={require('../../assets/images/logo.png')}
              style={styles.logoImage}
            />

            <View>
              <Text style={styles.title}>Welcome to RN Contacts App</Text>
              <Text style={styles.subTitle}>Create a free account</Text>

              <View style={styles.form}>
                <Input
                    label="Username"
                    iconPosition='right'
                    placeholder={'Enter username'}
                    error={errors.userName}
                    onChangeText={(value) => {onChange({name: 'userName', value})}}
                />

                <Input
                    label="First name"
                    iconPosition='right'
                    placeholder={'Enter first name'}
                    onChangeText={(value) => {onChange({name: 'firstName', value})}}
                    error={errors.firstName}
                />

                 <Input
                    label="Last name"
                    iconPosition='right'
                    placeholder={'Enter last name'}
                    error={errors.lastName}
                    onChangeText={(value) => {onChange({name: 'lastName', value})}}
                />

                 <Input
                    label="Email"
                    iconPosition='right'
                    placeholder={'Enter email'}
                    error={errors.email}
                    onChangeText={(value) => {onChange({name: 'email', value})}}
                />

                <Input
                    label="Password"
                    placeholder={'Enter Password'}
                    secureTextEntry={true}
                    icon={<Text>Show</Text>}
                    iconPosition='right'
                    error={errors.password}
                    onChangeText={(value) => {onChange({name: 'password', value})}}
                />

                <CustomButton onPress={onSubmit} primary title='Submit' />

                <View style={styles.createSection}>
                  <Text style={styles.infoText}>Already have an account ? </Text>

                  <TouchableOpacity onPress={() => navigate(LOGIN)}>
                   <Text style={styles.linkBio}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
        
        </Container>
    );
};

export default RegisterComponent;