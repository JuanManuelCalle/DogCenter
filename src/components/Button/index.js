import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'

const Button = ({onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button;
