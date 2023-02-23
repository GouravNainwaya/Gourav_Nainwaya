import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../constatnts/customResponsiveStyles";
import colors from "./../utils/colors";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import BottomBtn from "../components/BottomBtn";

const ScheduleAPickup = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Header title={"Schedule A Pickup"} />
      <ScrollView>
      <Text
        style={{
          width: horizontalScale(325),
          height: verticalScale(26),
          fontSize: moderateScale(16),
          color: colors.primary,
          lineHeight: 18,
          fontWeight: "500",
        }}
      >
        Price details
      </Text>

      <View
        style={{
          width: horizontalScale(325),
          height: verticalScale(132),
          backgroundColor: colors.cardsbackgroundColor,
          borderRadius: moderateScale(10),
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(14),
              color: colors.primary,
              lineHeight: 18,
              fontWeight: "400",
            }}
          >
            Subtotal
          </Text>
          <Text
            style={{
              fontSize: moderateScale(16),
              color: colors.primary,
              lineHeight: 18,
              fontWeight: "500",
            }}
          >
            $220.23
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(14),
              color: colors.primary,
              lineHeight: 18,
              fontWeight: "400",
            }}
          >
            Tax
          </Text>
          <Text
            style={{
              fontSize: moderateScale(16),
              color: colors.primary,
              lineHeight: 18,
              fontWeight: "500",
            }}
          >
            $10
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(14),
              color: colors.primary,
              lineHeight: 18,
              fontWeight: "400",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              fontSize: moderateScale(16),
              color: colors.primary,
              lineHeight: 18,
              fontWeight: "500",
            }}
          >
            $230.23
          </Text>
        </View>
      </View>

      <Text
        style={{
          width: horizontalScale(325),
          height: verticalScale(26),
          fontSize: moderateScale(16),
          color: colors.primary,
          lineHeight: 18,
          fontWeight: "500",
          marginVertical: 10,
        }}
      >
        Schedule Date
      </Text>

      <View
        style={{
          width: horizontalScale(325),
          height: verticalScale(64),
          backgroundColor: colors.cardsbackgroundColor,
          borderRadius: moderateScale(10),
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            //   width: horizontalScale(325),
            //   height: verticalScale(26),
            fontSize: moderateScale(12),
            color: colors.pink,
            lineHeight: 14,
            fontWeight: "400",
            //   alignItems: 'center',
            position: "absolute",
            top: -8,
            left: 50,
          }}
        >
          Pickup Time
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            borderColor: colors.primary,
            borderWidth: 0.2,
          }}
        >
          <View
            style={{
              height: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <AntDesign
              style={{ marginTop: 5 }}
              name="calendar"
              size={24}
              color={colors.pink}
            />
            <View>
              <Text
                style={{
                  //   width: horizontalScale(325),
                  //   height: verticalScale(26),
                  fontSize: moderateScale(14),
                  color: colors.secondary,
                  lineHeight: 18,
                  fontWeight: "400",
                  alignItems: "center",
                }}
              >
                Thu, 1 Apr
              </Text>
              <Text
                style={{
                  //   width: horizontalScale(325),
                  //   height: verticalScale(26),
                  fontSize: moderateScale(18),
                  color: colors.primary,
                  lineHeight: 21,
                  fontWeight: "500",
                  //   alignItems: 'center'
                }}
              >
                10:00 AM
              </Text>
            </View>
            <AntDesign
              style={{ opacity: 0 }}
              name="calendar"
              size={24}
              color={colors.pink}
            />
          </View>
        </View>

        <Text
          style={{
            //   width: horizontalScale(325),
            //   height: verticalScale(26),
            fontSize: moderateScale(12),
            color: colors.pink,
            lineHeight: 14,
            fontWeight: "400",
            //   alignItems: 'center',
            position: "absolute",
            top: -8,
            right: 50,
          }}
        >
          Delivery Time
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            borderColor: colors.primary,
            borderWidth: 0.2,
          }}
        >
          <View
            style={{
              height: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <AntDesign
              style={{ marginTop: 5 }}
              name="calendar"
              size={24}
              color={colors.pink}
            />
            <View>
              <Text
                style={{
                  //   width: horizontalScale(325),
                  //   height: verticalScale(26),
                  fontSize: moderateScale(14),
                  color: colors.secondary,
                  lineHeight: 18,
                  fontWeight: "400",
                  alignItems: "center",
                }}
              >
                Thu, 1 Apr
              </Text>
              <Text
                style={{
                  //   width: horizontalScale(325),
                  //   height: verticalScale(26),
                  fontSize: moderateScale(18),
                  color: colors.primary,
                  lineHeight: 21,
                  fontWeight: "500",
                  //   alignItems: 'center'
                }}
              >
                21:00 AM
              </Text>
            </View>
            <AntDesign
              style={{ opacity: 0 }}
              name="calendar"
              size={24}
              color={colors.pink}
            />
          </View>
        </View>
      </View>

      <Text
        style={{
          width: horizontalScale(325),
          height: verticalScale(26),
          fontSize: moderateScale(16),
          color: colors.primary,
          lineHeight: 18,
          fontWeight: "500",
          marginVertical: 10,
        }}
      >
        Payment method
      </Text>

      <View
        style={{
          width: horizontalScale(325),
          height: verticalScale(162),
          backgroundColor: colors.cardsbackgroundColor,
          borderRadius: moderateScale(10),
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <AntDesign
            style={{ opacity: 0 }}
            name="checkcircleo"
            size={24}
            color={colors.pink}
          />
          <View
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              marginRight: "35%",
              alignItems: "center",
              // backgroundColor: 'red'
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                color: colors.primary,
                lineHeight: 18,
                fontWeight: "500",
              }}
            >
              Pay Via Paypal
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.pink,
                lineHeight: 14,
                fontWeight: "400",
                marginRight: 15,
                marginVertical: 5,
              }}
            >
              + Add account
            </Text>
          </View>
          <Image
            style={{
              width: horizontalScale(34),
              height: verticalScale(34),
              left: 10,
            }}
            source={require("../../assets/icon/Paypal_logo.png")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <AntDesign
            style={{ alignSelf: "flex-start" }}
            name="checkcircleo"
            size={24}
            color={colors.pink}
          />
          <View
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              marginRight: "35%",
              // backgroundColor: 'red'
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                color: colors.primary,
                lineHeight: 18,
                fontWeight: "500",
                left: 20,
              }}
            >
              Visa/Master Card
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.pink,
                lineHeight: 14,
                fontWeight: "400",
                marginRight: 15,
                marginVertical: 5,
              }}
            >
              **** ** ***
            </Text>
          </View>
          <Image
            style={{
              width: horizontalScale(48),
              height: verticalScale(16),
              right: 5,
            }}
            source={require("../../assets/icon/Visa.png")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            alignItems: "center",
            // marginTop: 30
          }}
        >
          <AntDesign
            style={{ opacity: 0 }}
            name="checkcircleo"
            size={24}
            color={colors.pink}
          />
          <View
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              marginRight: "35%",
              // backgroundColor: 'red'
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(16),
                color: colors.primary,
                lineHeight: 18,
                fontWeight: "500",
                left: "20%",
              }}
            >
              Cash On Delivery
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.pink,
                lineHeight: 14,
                fontWeight: "400",
                marginRight: 15,
                marginVertical: 20,
                opacity: 0,
              }}
            >
              + Add account
            </Text>
          </View>
          <Image
            style={{
              width: horizontalScale(56),
              height: verticalScale(56),
              bottom: 20,
              backgroundColor: colors.white,
              right: 5,
            }}
            source={require("../../assets/icon/truck.png")}
          />
        </View>
      </View>

      <Text
        style={{
          width: horizontalScale(325),
          height: verticalScale(26),
          fontSize: moderateScale(16),
          color: colors.primary,
          lineHeight: 18,
          fontWeight: "500",
          marginVertical: 10,
        }}
      >
        Address
      </Text>

      <View
        style={{
          width: horizontalScale(325),
          height: verticalScale(140),
          backgroundColor: colors.cardsbackgroundColor,
          borderRadius: moderateScale(10),
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{
              width: horizontalScale(15),
              height: verticalScale(15),
              tintColor: colors.pink,
              resizeMode: "contain",
            }}
            source={require("../../assets/icon/Ellipsecircle.png")}
          />
          <View
            style={{ backgroundColor: colors.pink, height: "30%", width: "2%" }}
          />
          <Feather
            name="map-pin"
            size={moderateScale(22)}
            color={colors.pink}
          />
        </View>
        <View style={{ flex: 12, }}>
          <View style={{ padding: 5 ,borderColor: colors.pink, borderWidth: 0.2,}}>
            <Text
              style={{
                width: horizontalScale(325),
                // height: verticalScale(26),
                fontSize: moderateScale(14),
                color: colors.primary,
                lineHeight: 16,
                fontWeight: "500",
                // marginVertical: 20,
              }}
            >
              Pickup Address
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.pink,
                lineHeight: 14,
                fontWeight: "400",
                // marginRight: 15,
                marginVertical: 5,
              }}
            >
              CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, {"\n"} Ha Noi
            </Text>
          </View>
          <View style={{ padding: 5 ,borderColor: colors.pink, borderWidth: 0.2,}}>
            <Text
              style={{
                width: horizontalScale(325),
                // height: verticalScale(26),
                fontSize: moderateScale(14),
                color: colors.primary,
                lineHeight: 16,
                fontWeight: "500",
                // marginVertical: 20,
              }}
            >
              Delivery Address
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.pink,
                lineHeight: 14,
                fontWeight: "400",
                // marginRight: 15,
                marginVertical: 5,
              }}
            >
              CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, {"\n"} Ha Noi
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          width: horizontalScale(325),
          height: verticalScale(140),
          backgroundColor: colors.cardsbackgroundColor,
          borderRadius: moderateScale(10),
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{
              width: horizontalScale(15),
              height: verticalScale(15),
              tintColor: colors.pink,
              resizeMode: "contain",
            }}
            source={require("../../assets/icon/Ellipsecircle.png")}
          />
          <View
            style={{ backgroundColor: colors.pink, height: "30%", width: "2%" }}
          />
          <Feather
            name="map-pin"
            size={moderateScale(22)}
            color={colors.pink}
          />
        </View>
        <View style={{ flex: 12, }}>
          <View style={{ padding: 5 ,borderColor: colors.pink, borderWidth: 0.2,}}>
            <Text
              style={{
                width: horizontalScale(325),
                // height: verticalScale(26),
                fontSize: moderateScale(14),
                color: colors.primary,
                lineHeight: 16,
                fontWeight: "500",
                // marginVertical: 20,
              }}
            >
              Pickup Address
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.pink,
                lineHeight: 14,
                fontWeight: "400",
                // marginRight: 15,
                marginVertical: 5,
              }}
            >
              CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, {"\n"} Ha Noi
            </Text>
          </View>
          <View style={{ padding: 5 ,borderColor: colors.pink, borderWidth: 0.2,}}>
            <Text
              style={{
                width: horizontalScale(325),
                // height: verticalScale(26),
                fontSize: moderateScale(14),
                color: colors.primary,
                lineHeight: 16,
                fontWeight: "500",
                // marginVertical: 20,
              }}
            >
              Delivery Address
            </Text>
            <Text
              style={{
                fontSize: moderateScale(12),
                color: colors.pink,
                lineHeight: 14,
                fontWeight: "400",
                // marginRight: 15,
                marginVertical: 5,
              }}
            >
              CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, {"\n"} Ha Noi
            </Text>
          </View>
        </View>
      </View>
      </ScrollView>

      {/* //? bottom  */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.white,
          position: "absolute",
          bottom: "0%",
          width: horizontalScale(414),
          height: verticalScale(145),
          borderTopEndRadius: moderateScale(60),
          borderTopStartRadius: moderateScale(60),
          borderTopLeftRadius: moderateScale(60),
          borderTopRightRadius: moderateScale(60),
          shadowColor: "#000000",
            shadowOffset: {
            width: 0,
            height: 18,
            },
            shadowOpacity:  2.25,
            shadowRadius: 50.00,
            elevation: 150,
        }}
      >
        <BottomBtn choosedType={true} />
      </View>
      {/* //? bottom  */}
    </View>
  );
};

export default ScheduleAPickup;

const styles = StyleSheet.create({});
