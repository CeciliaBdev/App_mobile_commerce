import { View, StyleSheet } from 'react-native'
import LottieView from "lottie-react-native";
import React, {Dispatch, SetStateAction} from 'react'

interface LoaderProps {
  setLoading: Dispatch<SetStateAction<boolean>>
}

export default function Loader({setLoading}:LoaderProps) {
    return (
      <View style={styles.animation}>
        <LottieView source={require('../assets/loader_restaurant.json')} autoPlay loop={false} onAnimationFinish={() => setLoading(false)} style={{ height:150 }}  />
      </View>
    )
  }
  const styles = StyleSheet.create({
    animation: {
      justifyContent:'center',
      alignItems:'center',
      flex:1,
      zIndex:1,
    }
  });