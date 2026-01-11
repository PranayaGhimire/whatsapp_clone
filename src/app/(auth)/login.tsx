/* eslint-disable react/no-unescaped-entities */
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonComp from "@/src/components/atoms/ButtonComp";
import { router } from "expo-router";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import imagePath from "@/src/constants/imagePath";

const Login = () => {
  const onNext = () => {
    router.push("/verify-otp")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.{" "}
            <Text style={styles.link}>What's my number?</Text>
          </Text>
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.dropDownContainer}>
                <View/>
                <Text style={styles.dropDownTitle}>India</Text>
                <Image source={imagePath.dropDown}/>
            </View>
            <View style={styles.horizontalLine}/>
        </View>
      </View>
      <View style={styles.footer}>
          <ButtonComp title="Next" onPress={onNext} style={{paddingHorizontal:scale(20)}}/>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical:verticalScale(70),
    paddingHorizontal:scale(15)
  },
  header: {
    gap:verticalScale(50)
  },
  headingContainer:{
    gap:verticalScale(25)
  },
  heading:{
    fontSize:moderateScale(20),
    fontWeight:"bold",
    textAlign:"center"
  },
  description:{
    fontSize:moderateScale(13),
    textAlign:"center",
    fontWeight:400
  },
  link:{
    color:"#002AC0"
  },
  inputContainer:{
    paddingHorizontal:30
  },
  dropDownContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:verticalScale(10),
    paddingHorizontal:scale(10)
  },
  dropDownTitle:{
    fontSize:moderateScale(14)
  },
  horizontalLine:{
    width:"100%",
    height:verticalScale(1),
    backgroundColor:"#00A884"
  },
  footer: {
    width:scale(80)
  },
});
