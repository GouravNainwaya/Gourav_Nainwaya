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
import colors from "./../utils/colors";
import { Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import BottomBtn from "./../components/BottomBtn";
import Header from './../components/Header';

const OrdersList = () => {
  const [optionsName, setOptionsName] = useState([
    { name: "Wash", choosed: true, id: 0 },
    { name: "Ironing", choosed: false, id: 1 },
    { name: "Fold", choosed: false, id: 2 },
    { name: "Dry", choosed: false, id: 3 },
    { name: "Cleaning", choosed: false, id: 4 },
  ]);

  const [cardsData, setCardsData] = useState([
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 0,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 1,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 2,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 3,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 4,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 5,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 6,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 7,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 8,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 9,
    },
    {
      imageLogo: require("../../assets/icon/tshirt.png"),
      name: "T-Shirt",
      id: 10,
    },
  ]);
  return (
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
      <Header title={"Orders List"}/>
      <View style={{ marginLeft: "5%", marginVertical: "3%" }}>
        {/*//? options btns  */}
        <ScrollView horizontal>
          {optionsName.map((item) => {
            return (
              <TouchableOpacity key={item.id}>
                <Text
                  style={{
                    margin: 4,
                    backgroundColor: item.choosed ? colors.pink : colors.white,
                    width: horizontalScale(81),
                    height: verticalScale(34),
                    borderRadius: moderateScale(5),
                    textAlign: "center",
                    textAlignVertical: "center",
                    fontSize: moderateScale(14),
                    borderColor: colors.pink,
                    borderWidth: item.choosed == false ? 1 : 0,
                    color: item.choosed ? colors.white : colors.primary,
                    lineHeight: 18,
                    fontWeight: "400",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {/*//? options btns  */}
        {/* //?Cards */}
        <ScrollView alwaysBounceVertical style={{ flexGrow: 21 }}>
          {cardsData.map((item) => {
            return (
              <View
                key={item.id}
                style={{
                  width: horizontalScale(345),
                  height: verticalScale(72),
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: 4,
                  marginVertical: 7,
                  backgroundColor: colors.cardsbackgroundColor,
                  borderRadius: moderateScale(10),
                }}
              >
                <Image
                  style={{
                    width: horizontalScale(46),
                    height: verticalScale(39),
                  }}
                  source={item.imageLogo}
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "31%",
                    marginVertical: 15,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        // width: horizontalScale(100),
                        // height: verticalScale(19),
                        paddingVertical: 10,
                        // textAlign: "center",
                        fontSize: moderateScale(18.75),
                        color: colors.primary,
                        lineHeight: 16,
                        fontWeight: "500",
                      }}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          marginRight: "13%",
                          fontSize: moderateScale(13),
                          color: colors.pink,
                          lineHeight: 15,
                          fontWeight: "400",
                          marginRight: 20,
                        }}
                      >
                        $2
                      </Text>
                      <Text
                        style={{
                          fontSize: moderateScale(13),
                          color: colors.primary,
                          lineHeight: 15,
                          fontWeight: "400",
                        }}
                      >
                        Men
                      </Text>
                      <Image
                        style={{ marginLeft: 5 }}
                        source={require("../../assets/icon/dropdown.png")}
                      />
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo
                    style={{
                      backgroundColor: colors.white,
                      borderRadius: moderateScale(50),
                      borderColor: colors.secondary,
                      borderWidth: 0.2,
                    }}
                    name="minus"
                    size={moderateScale(24)}
                    color={colors.primary}
                  />
                  <Text
                    style={{
                      fontSize: moderateScale(16),
                      color: colors.primary,
                      lineHeight: 18,
                      fontWeight: "500",
                      textAlign: "center",
                      marginHorizontal: 7,
                    }}
                  >
                    0
                  </Text>
                  <Entypo
                    style={{
                      backgroundColor: colors.white,
                      borderRadius: moderateScale(50),
                      borderColor: colors.secondary,
                      borderWidth: 0.2,
                    }}
                    name="plus"
                    size={moderateScale(24)}
                    color={colors.primary}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
        {/* //?Cards */}
      </View>
      {/* //? bottom  */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.white,
          position: "absolute",
          bottom: "0%",
          width: horizontalScale(414),
          height: verticalScale(198),
          borderTopEndRadius: moderateScale(50),
          borderTopStartRadius: moderateScale(50),
          borderTopLeftRadius: moderateScale(50),
          borderTopRightRadius: moderateScale(50),
          shadowColor: "#000000",
            shadowOffset: {
            width: 0,
            height: 18,
            },
            shadowOpacity:  0.25,
            shadowRadius: 20.00,
            elevation: 150,
        }}
      >
        <View
          style={{
            width: horizontalScale(360),
            height: verticalScale(72),
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: moderateScale(10),
          }}
        >
          <Image
            style={{ width: horizontalScale(22), height: verticalScale(24) }}
            source={require("../../assets/icon/box.png")}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: "40%",
              marginVertical: 15,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: colors.pink,
                  lineHeight: 14,
                  fontWeight: "400",
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(16),
                  color: colors.secondary,
                  lineHeight: 19,
                  fontWeight: "500",
                }}
              >
                16 items
              </Text>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.pink,
                lineHeight: 14,
                fontWeight: "400",
              }}
            >
              cost
            </Text>
            <Text
              style={{
                fontSize: moderateScale(16),
                color: colors.pink,
                lineHeight: 19,
                fontWeight: "500",
              }}
            >
              18$
            </Text>
          </View>
        </View>
        <BottomBtn choosedType={true} />
      </View>
      {/* //? bottom  */}
    </View>
  );
};

export default OrdersList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 50,
  },
});
