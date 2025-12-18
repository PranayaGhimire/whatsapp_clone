import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import imagePath from "@/src/constants/imagePath";
import ButtonComp from "@/src/components/atoms/ButtonComp";
import { router } from "expo-router";

const TermsAgree = () => {
  const onAgree = () => {
    router.push("/(auth)/login")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Whatsapp</Text>
        <Image source={imagePath.welcome} style={styles.imageStyle} />
        <Text style={styles.descriptionText}>
          Read our <Text style={styles.linkText}>Privacy Policy</Text>. Tap
          “Agree and continue” to accept the{" "}
          <Text style={styles.linkText}>Teams of Service</Text>.
        </Text>
        <View style={{width:300}}>
             <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree}/>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.fromText}>From</Text>
        <Text style={styles.facebookText}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};

export default TermsAgree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(25),
    backgroundColor:"white"
  },
  header: {
    alignItems: "center",
    gap: verticalScale(30),
  },
  welcomeText: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    marginBottom:verticalScale(10)
  },
  imageStyle: {
    width: moderateScale(250),
    height: moderateScale(250),
  },
  descriptionText: {
    textAlign: "center",
    fontSize: moderateScale(13),
  },
  linkText: {
    color: "#0C42CC",
  },
  footer: {
    alignItems: "center",
  },
  fromText: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebookText: {
    fontSize: moderateScale(15),
    color: "#000",
    textTransform: "uppercase",
    fontWeight: "600",
  },
});
