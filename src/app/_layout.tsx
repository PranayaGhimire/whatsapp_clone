import { StyleSheet, Text, View } from 'react-native'
import { Redirect, Stack } from 'expo-router'
import { useState } from 'react'

const RootLayout = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <>
      <Stack screenOptions={{headerShown:false}}/>
      {
        isLoggedIn ? <Redirect href={`/(main)`}/> :<Redirect href={`/(auth)`}/>
      }
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})