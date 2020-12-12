import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from '../styles/globalStyles';

const Card = (props) => {
  return(
    <View style={styles.card}>
      <Text>{props.name}</Text>
      <Text>{props.quantity}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.cardButton} onPress={() => props.onPressIncrement(props.index)}>
          <Text style={{color: 'green', fontSize: 30}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => props.onPressDecrement(props.index)}>
          <Text style={{color: 'red', fontSize: 30}}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => props.onPressRemove(props.index)}>
          <Text style={{color: 'black', fontSize: 30}}>×</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card;