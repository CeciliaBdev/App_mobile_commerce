import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.title}>
        <Text >Mon application React Native</Text> 
      </View> 
      <View style={styles.banner}> 
        <Text>Logements</Text>
      </View>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
 app:{},

  title: {
   backgroundColor: 'blue',
   height:100,
   justifyContent:'center',
   alignItems:'center'
  },
  banner: {
    backgroundColor: 'lightblue',
    height:50,
    justifyContent:'center',
    alignItems:'center'
   }
});


export default App