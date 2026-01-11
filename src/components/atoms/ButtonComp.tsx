import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
interface Props{
    title:string,
    onPress:() => void,
    style?:object
}

const ButtonComp = ({title,onPress,style}:Props) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer,style]} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
    buttonContainer:{
        width:"100%",
        backgroundColor:"#00A884",
        paddingVertical:verticalScale(10),
        paddingHorizontal:scale(10),
        borderRadius:moderateScale(4),
        alignItems:"center"
    },
    buttonText:{
        color:"white"
    }
})