import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import Home from './src/Pages/Home';
import Profile from './src/Pages/Profile';

const Stack = createStackNavigator();

const Apps = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            ...headerOptions
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            ...headerOptions
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerOptions = {
  headerLeft: null,
  animationEnabled: false
};

export default Apps;