import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {datas} from '../datas/test_images.js'
// import Locations from './datas/locations.json'
import React, {useState, useEffect} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CountButton from './CountButton.js'


const Home = ({}) => {



  return (
    <View>
     <ScrollView >
        <View style={styles.title}>
          {/* <MaterialIcons name="arrow-back" color="#333" size={20}  style={{paddingHorizontal:5}} onPress={() => navigation.navigate('Login')}/>  */}
          <Text >Mon application</Text> 
        </View> 
        <View style={styles.banner}> 
          <Text>Nos produits</Text>
        </View>
        <View>
          {datas.map((data, id) => {
          return (
           
            <View style={styles.card} key={id}>
              <Image source={data.image} style={styles.imagetest} />
              
                <View > 
                  <Text>{data.article}</Text>
                  <Text>{data.price} euros</Text>
                  <View  style={{flexDirection:'column', gap:20}}> 
                  <CountButton />
                  </View>
                </View>
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
      backgroundColor: 'red',
      height:100,
      justifyContent:'space-around',
      alignItems:'center', 
      flexDirection:'row'
     },
     banner: {
       backgroundColor: '##FF9696',
       height:50,
       justifyContent:'center',
       alignItems:'center'
      },
      imagetest:{
       width:150,
       height:100,
      marginRight:50
      },
      card:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       margin:20
      }
   });
export default Home