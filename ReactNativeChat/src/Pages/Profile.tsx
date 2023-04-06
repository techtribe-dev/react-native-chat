import React from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = ({navigation, route}: any) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;
