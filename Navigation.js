import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import ActivityScreen from './src/Screens/ActivityScreen';
import HomeScreen from './src/Screens/HomeScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={
           {
            headerShown: false
           }
        }>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;