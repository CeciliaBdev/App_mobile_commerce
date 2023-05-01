import { StyleSheet} from 'react-native'
import React from 'react'
// import Loader from './components/Loader'
// import Home from './components/Home'
// import LoginScreen from './components/LoginScreen'
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './components/AuthStack'


// const Stack = createNativeStackNavigator();

const App = () => {
 
  // const [isLoading, setLoading] = React.useState<boolean>(true)
  return (
    <NavigationContainer>
      {/* isLoading ? <Loader setLoading={setLoading}/> : <LoginScreen />
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator> */}
      <AuthStack />
    </NavigationContainer>
      
  )
 
}

const styles = StyleSheet.create({
 app:{
  flex:1,
  width: '100%',
  height: '100%',
  justifyContent:'center',
  alignItems:'center',
  zIndex:1
 }
});


export default App