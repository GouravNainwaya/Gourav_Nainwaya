import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../constatnts/customResponsiveStyles";
import colors from "./../utils/colors";

const BottomBtn = ({ choosedType ,title, onPress}) => {
  return (
    <TouchableOpacity>
      <Text
        style={{
          backgroundColor: choosedType ? colors.pink : colors.white,
          borderWidth: choosedType == false ? 1 : 0,
          width: horizontalScale(330),
          textAlign: "center",
          textAlignVertical: "center",
          // marginRight: 17,
          height: verticalScale(65),
          borderRadius: moderateScale(8),
          elevation: 5,
          color: choosedType ? colors.white : colors.primary,
          fontSize: moderateScale(16),
          fontWeight: "500",
          lineHeight: 18,
        }}
        onPress={onPress}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BottomBtn;

const styles = StyleSheet.create({});
