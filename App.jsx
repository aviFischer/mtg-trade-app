import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers/reducers';
import HomeScreen from './src/screens/HomeScreen';
import WishlistScreen from './src/screens/WishlistScreen';

Stack = createStackNavigator()

const store = createStore(reducers);

export default function App() {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRoute='Home' screenOptions={{headerStyle: {backgroundColor: 'black'}, headerTitleStyle: {color: 'white'}, headerTintStyle: 'white'}}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Wishlist' component={WishlistScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
