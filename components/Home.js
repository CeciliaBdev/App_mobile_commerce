import { View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import {datas} from '../datas/test_images.js'
// import Locations from './datas/locations.json'
import React, {useState, useEffect} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CountButton from './CountButton.js'


const Home = ({}) => {



  return (
    <View style={styles.container}>
     <ScrollView >
        <View style={styles.title}>
          {/* <MaterialIcons name="arrow-back" color="#333" size={20}  style={{paddingHorizontal:5}} onPress={() => navigation.navigate('Login')}/>  */}
          <Text style={{fontWeight:'bold', fontSize:22}}>Boulangerie Cécilia</Text> 
        </View> 
        <View style={styles.banner}> 
          <Text>Nos produits</Text>
        </View>
        <View>
          {datas.map((data, id) => {
          return (
           
            <View style={styles.card} key={id}>
              <Image source={data.image} style={styles.imagetest} />
    
              <View style={styles.text_card} > 
                  <Text style={{fontWeight:'bold', color:'red'}}>{data.article}</Text>
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
      <View style={styles.footer}>
        <MaterialIcons name="logout" color="black" size={30} />
        <MaterialIcons name="shopping-cart" color="black" size={30} />
      </View>  
    </View>
  )
}
const styles = StyleSheet.create({
      container:{ flex:1},

     title: {
      backgroundColor: '#FFB6C1',
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
       width:'65%',
       height:100,
      marginRight:50,
     
      },
      card:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       marginHorizontal:60,
       marginVertical:20,
       
      },
      text_card:{
        width:'50%',
      },
      footer:{
        height:60,
        backgroundColor:'#FFB6C1',
        flexDirection:'row',
       alignItems:'center', 
       justifyContent:'space-around'
      }
   });
export default Home