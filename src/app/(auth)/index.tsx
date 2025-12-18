/* eslint-disable no-unused-expressions */
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "@/src/constants/imagePath";
import { verticalScale, moderateScale } from "react-native-size-matters";
import { router } from "expo-router";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(true),
        setTimeout(() => {
          router.push("/(auth)/terms-agree");
        }, 3000);
    }, 2000);
    return () => {
      clearTimeout(timeout)
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logo_style}
          resizeMode="contain"
        />
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(46)} color={"#0CCC83"} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>From</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    fontWeight: "bold",
  },
  logo_style: {
    width: moderateScale(70),
    height: moderateScale(70),
  },
  loading_text: {
    fontSize: moderateScale(24),
    color: "#00A884",
    fontWeight: "bold",
    marginTop: verticalScale(15),
  },
  footer: {
    alignItems: "center",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#0000000",
  },
});
