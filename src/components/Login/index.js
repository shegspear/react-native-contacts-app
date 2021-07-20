import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Container from '../common/Container/index';
import CustomButton from '../common/CustomButton/index';
import Input from '../common/Input/index';
import {REGISTER} from '../../constants/RouteNames';
import Message from '../common/Message/index.js';

import styles from './styles';

const LoginComponent = ({
  error,
  loading,
  onChange,
  onSubmit,
}) => {
    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return(
       <Container>
            <Image 
              source={require('../../assets/images/logo.png')}
              style={styles.logoImage}
            />

            <View>
              <Text style={styles.title}>Welcome to RN Contacts App</Text>
              <Text style={styles.subTitle}>Please login here</Text>

              <View style={styles.form}>

              {error && !error.error && (
                <Message onDismiss={() => {console.log('close tab')}}  danger message='invalid credentials' />
              )}

              {error?.error && (
                <Message
                  danger
                  onDismiss
                  message={error?.error}
                />
              )}

                <Input
                  label="Username"
                  iconPosition='right'
                  placeholder={'Enter Username'}
                  onChangeText={(value) => {onChange({name: 'userName', value})}}
                />

                <Input
                  label="Password"
                  placeholder={'Enter Password'}
                  secureTextEntry={isSecureEntry}
                  icon={
                    <TouchableOpacity onPress={() => {
                      setIsSecureEntry(!isSecureEntry);
                    }}>
                      <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity>
                  }
                  iconPosition='right'
                  onChangeText={(value) => {onChange({name: 'password', value})}}
                />

                <CustomButton
                  disabled={loading} 
                  onPress={onSubmit}
                  loading={loading} 
                  primary 
                  title='Submit' 
                />

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