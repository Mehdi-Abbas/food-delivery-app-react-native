import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Restaurant,  Home, Message_ ,Search} from './screens'


import { Provider } from 'react-native-paper'
import firebase from 'firebase/app'
import 'firebase/auth'
import { theme } from './src/core/theme'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  
} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'

const Stack = createStackNavigator();
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}


const App = () => {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'AuthLoadingScreen'} 
                >
                    <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen}/>
                    <Stack.Screen name="StartScreen" component={StartScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Restaurant" component={Restaurant} />
                    <Stack.Screen name="Message_" component={Message_} />
                    <Stack.Screen name="Search" component={Search} />
                    <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    ) 
   
}

export default App;