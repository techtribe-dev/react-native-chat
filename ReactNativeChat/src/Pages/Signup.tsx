import React from 'react';
import {View, TextInput} from 'react-native';
import LoginScreen from 'react-native-login-screen';

const SignupScreen = ({navigation, route}: any) => {
  let username = '';
  return (
    <LoginScreen
      logoImageSource={require('../../assets/127135931.png')}
      onLoginPress={() => {}}
      onSignupPress={() => {}}
      onEmailChange={(value: string) => {
        username = value;
        console.log('username: ', username);
      }}
      loginButtonText={'Create an account'}
      disableSignup
      textInputChildren={
        <View style={{marginTop: 16}}>
          <TextInput
            placeholder="Re-Password"
            secureTextEntry
            onChangeText={(value: string) => {}}
          />
        </View>
      }
      onPasswordChange={(password: string) => {}}
    />
  );
};

export default SignupScreen;
