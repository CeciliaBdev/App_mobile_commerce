import { SafeAreaView, Text, Image, View, TextInput } from 'react-native'
import React from 'react'
import logo from '../assets/logo_restaurant.png'
import AntIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
        <View style={{paddingHorizontal:25}}>
            <View style={{alignItems:'center'}}>
                <Image source={logo} height={300} width={300} />
            </View>
            <Text style={{fontSize:28, color:'#333', marginBottom:15}}>Login</Text>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
                <MaterialIcons name="alternate-email" color="#333" size={20}  style={{paddingHorizontal:5}}/> 
                <TextInput placeholder='Email' keyboardType='email-address' />         
            </View>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
                <MaterialIcons name="lock" color="#333" size={20}  style={{paddingHorizontal:5}}/> 
                <TextInput placeholder='Password' keyboardType='password'  secureTextEntry={true}/>         
            </View>
        </View>
    </SafeAreaView>
  )
}

export default LoginScreen