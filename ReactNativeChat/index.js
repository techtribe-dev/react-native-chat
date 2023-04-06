/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Pages/Login';
import Profile from './src/Pages/Profile';
import Signup from './src/Pages/Signup';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Application = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login Screen'}}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Signup" component={Signup} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Application);
