import { StyleSheet} from 'react-native'
import React from 'react'
import Loader from './components/Loader'
import Home from './components/home'
import LoginScreen from './components/LoginScreen'


const App = () => {
 
  const [isLoading, setLoading] = React.useState<boolean>(true)

  // return isLoading ? <Loader setLoading={setLoading}/> : <Home />
  return isLoading ? <Loader setLoading={setLoading}/> : <LoginScreen />
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