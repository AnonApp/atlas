// In App.js in a new project

import * as React from 'react';
import { Keyboard, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedScreen } from './screens/FeedScreen.js'
import { ThreadScreen } from './screens/ThreadScreen.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* WELCOME SCREEN */} 
        {/* <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{
            animationEnabled: false,
            headerTransparent: true,
          }}
        /> */}

        {/* FEED SCREEN */}
        <Stack.Screen 
          name="Feed" 
          component={FeedScreen} 
          options= {({ navigation, route }) => ({
            title: "Jakarta",
            animationEnabled: false,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '800',
              fontSize: 20,
            },
          })}
        />

        {/* THREAD SCREEN */}
        <Stack.Screen 
          name="Thread" 
          component={ThreadScreen} 
          options={{
            animationEnabled: false,
            headerStyle: {
              backgroundColor: 'rgb(77, 135, 246)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;