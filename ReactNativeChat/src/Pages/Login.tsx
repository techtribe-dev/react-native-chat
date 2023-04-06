import React from 'react';
import {View, Text} from 'react-native';
import {Button, TextInput} from 'react-native';
import LoginScreen from 'react-native-login-screen';

const Login = ({navigation}: any) => {
  let username = '';
  return (
    <LoginScreen
      logoImageSource={require('../../assets/127135931.png')}
      onLoginPress={() => {}}
      onSignupPress={() => {
        navigation.navigate('Signup', {name: 'Jane'});
      }}
      onEmailChange={(value: string) => {
        username = value;
        console.log('username: ', username);
      }}
      onPasswordChange={(password: string) => {}}
    />
  );
};

export default Login;
