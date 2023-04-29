import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {datas} from '../datas/test_images.js'
// import Locations from './datas/locations.json'
import React from 'react'


const Home = () => {
  return (
    <View>
     <ScrollView >
        <View style={styles.title}>
          <Text >Mon application React Native</Text> 
        </View> 
        <View style={styles.banner}> 
          <Text>Logements</Text>
        </View>
        <View>
          {datas.map((data) => {
          return (
            <View style={styles.card} key={data.id}>
              <Image source={data.image} style={styles.imagetest} />
              <Text>{data.text}</Text>
            </View>
           );
          })}
        </View>
      </ScrollView>    
    </View>
  )
}
const styles = StyleSheet.create({
    
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
export default Home