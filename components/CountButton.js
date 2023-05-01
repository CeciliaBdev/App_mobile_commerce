import React, { useState } from 'react';
import { View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function ButtonCounter({}) {
  const [count, setCount] = useState(0);

  function Plus() {
    setCount(count + 1);
  }
  function Moins() {
      setCount(count - 1);
    }

  return (
    <View>
      <View  style={{flexDirection:'column', gap:20}}> 
                        <View style={{flexDirection:'row', gap:5}}>
                         <MaterialIcons name="remove" color="lightgrey" size={20}  onPress={Moins} /> 
                         <Text> {count}</Text>
                        <MaterialIcons name="add" color="red" size={20}  onPress={Plus} /> 
                         </View>
                    </View>
    </View>
  );
}