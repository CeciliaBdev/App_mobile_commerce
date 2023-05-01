import React from 'react'
import Home from './Home';
import LoginScreen from './LoginScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
 
  return (
   
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    
      
  )
 
}



export default App