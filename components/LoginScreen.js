import { SafeAreaView, Text, Image, View, TextInput, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import logo from '../assets/logo_restaurant.png'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



  
const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
        <View style={{paddingHorizontal:25}}>
            <View style={{alignItems:'center'}}>
                <Image source={logo} height={300} width={300} marginBottom={20}/>
            </View>
            <Text style={{fontSize:24, color:'#333', marginBottom:15, fontWeight:'bold'}}>Login</Text>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
                <MaterialIcons name="alternate-email" color="#333" size={20}  style={{paddingHorizontal:5}}/> 
                <TextInput placeholder='Email' keyboardType='email-address' />         
            </View>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
                <MaterialIcons name="lock" color="#333" size={20}  style={{paddingHorizontal:5}}/> 
                <TextInput placeholder='Password' secureTextEntry={true} style={{paddingRight:180}}/> 
                <TouchableOpacity onPress={() => {}} >
                    <Text style={{color:'red'}}>Forgot ?</Text>
                </TouchableOpacity>     
            </View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              borderColor: 'red',
              backgroundColor:'red',
              padding:15,
              borderRadius: 10,
              marginBottom:30, 
              marginHorizontal:40
            }}>
            <Text style={{color:'white', textAlign:'center', fontSize:16}}>Login</Text>
          </TouchableOpacity>
       
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen


  