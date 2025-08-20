import * as React from "react";
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DogScreen from "./src/screens/DogScreen";
import CadastroScreen from "./src/screens/CadastroScreen.js";
import LoginScreen from "./src/screens/LoginScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dog">
        <Stack.Screen 
          name="Dog" 
          component={DogScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CadastroScreen"
          component={CadastroScreen}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}