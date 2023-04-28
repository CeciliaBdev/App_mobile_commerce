import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import Locations from './datas/locations.json'
import Card from './components/card'
import {datas} from './datas/test_images.js'
import React, {useState} from 'react'

const App = () => {
  const [imageVar, setImageVar] = useState(0);
  return (

    <ScrollView style={styles.app}>
      <View style={styles.title}>
        <Text >Mon application React Native</Text> 
      </View> 
      <View style={styles.banner}> 
        <Text>Logements</Text>
      </View>
      <View>
        {/* <Image source={require('./assets/image1.png')} style={styles.imagetest}/> */}
        
        {/* texte en  liste */}
        {datas.map((data) => {
        return (
          <View style={styles.card}>
            <Image source={data.image} style={styles.imagetest}/>
            <Text>{data.text}</Text>
          </View>
        );
      })}
        
        
      </View>
    </ScrollView>
    
    
  )
}

const styles = StyleSheet.create({
 app:{},

  title: {
   backgroundColor: 'grey',
   height:100,
   justifyContent:'center',
   alignItems:'center'
  },
  banner: {
    backgroundColor: 'lightblue',
    height:50,
    justifyContent:'center',
    alignItems:'center'
   },
   imagetest:{
    width:250,
    height:200,
    marginRight:'auto',
    marginLeft:'auto'
   },
   card:{
    flexDirection:'column',
    alignItems:'center',
    margin:20
   }
});


export default App