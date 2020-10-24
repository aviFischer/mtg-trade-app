import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from './src/screens/HomeScreen';

Stack = createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRoute='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
