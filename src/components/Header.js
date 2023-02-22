import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../constatnts/customResponsiveStyles.js";
import colors from "../utils/colors.js";

const Header = () => {
  return (
    <SafeAreaView style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-around',height: '7%',}}>
      <Image
        style={{
          width: horizontalScale(20),
          height: verticalScale(20),
        }}
        resizeMode="contain"
        source={require("../../assets/icon/arrow-left.png")}
      />
      <Text
        style={{
          width: horizontalScale(267),
          height: verticalScale(21),
          borderRadius: moderateScale(5),
          textAlign: "center",
          textAlignVertical: "center",
          fontSize: moderateScale(18),
          lineHeight: 21,
          fontWeight: "500",
          color: colors.primary
        }}
      >
        Orders List
      </Text>
      <Image
        style={{
          width: horizontalScale(35),
          height: verticalScale(20),
          opacity: 0,
        }}
        // source={require("../../assets/icon/arrow-left.png")}
      />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
