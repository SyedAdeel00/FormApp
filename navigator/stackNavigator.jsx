import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HOME_SCREEN, USER_DATA } from '../constants/routes';
import HomeScreen from '../screens/HomeScreen';
import UserData from '../screens/UserData';
const Stack = createStackNavigator();
const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={HOME_SCREEN}>
<Stack.Screen name={HOME_SCREEN}  component={HomeScreen}/>
<Stack.Screen name={USER_DATA}  component={UserData}/>
  </Stack.Navigator>
  )
}

export default StackNavigator