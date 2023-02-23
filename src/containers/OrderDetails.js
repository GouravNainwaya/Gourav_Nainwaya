import { Image, StyleSheet, Text, View ,ScrollView} from "react-native";
import React from "react";
import Header from "../components/Header";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../constatnts/customResponsiveStyles";
import colors from "../utils/colors";
import { AntDesign } from '@expo/vector-icons';
import BottomBtn from "../components/BottomBtn";

const OrderDetails = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: "center" ,}}>
      <Header title={"Order Detail"} />
      <Image
        style={{
          width: horizontalScale(133),
          height: verticalScale(132),
          bottom: 10
        }}
        source={require("../../assets/icon/ol_image.png")}
        />
      <Text
        style={{
          // width: horizontalScale(100),
          // height: verticalScale(19),
          // paddingVertical: 10,
          textAlign: "center",
          fontSize: moderateScale(16),
          color: colors.primary,
          lineHeight: 18,
          fontWeight: "500",
        }}
      >
        Thanh for choosing Us!
      </Text>
      <Text
        style={{
          width: horizontalScale(265),
          // paddingVertical: 10,
          textAlign: "center",
          fontSize: moderateScale(16),
          color: colors.primary,
          lineHeight: 18,
          fontWeight: "500",
        }}
      >
        Your pickup has been confirmed
      </Text>
      {/* //? middle */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          // marginRight: "2%",
          borderColor: colors.pink,
          borderWidth: 0.2,
          width: "85%",
          paddingBottom: 10,
          marginTop: 20
        }}
      >
        <View
          style={{
            padding: 10,
            borderBottomColor: colors.pink,
            borderBottomWidth: 0.2,
            marginRight: 30,
          }}
        >
          <Text
            style={{
              width: horizontalScale(265),
              paddingVertical: 5,
              textAlign: "left",
              fontSize: moderateScale(16),
              color: colors.black,
              lineHeight: 19,
              fontWeight: "500",
              // alignItems: 'center'
            }}
          >
            Order #123{" "}
            <Text style={{ color: colors.pink, fontSize: moderateScale(12) }}>
              (2 bags)
            </Text>
          </Text>
          <Text
            style={{
              width: horizontalScale(265),
              textAlign: "left",
              fontSize: moderateScale(12),
              color: colors.pink,
              lineHeight: 14,
              fontWeight: "400",
              // alignItems: 'center'
            }}
          >
            11:35 AM, Thu, 15 Jun 2019
          </Text>
        </View>

        <View style={{
            padding: 10,
            borderBottomColor: colors.pink,
            borderBottomWidth: 0.2,
          }}>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginHorizontal: 10,
            marginRight: 29,
          }}
        >
          <Text
            style={{
              width: horizontalScale(260),
              height: verticalScale(26),
              fontSize: moderateScale(16),
              color: colors.primary,
              lineHeight: 18,
              fontWeight: "500",
              marginVertical: 10,
            }}
          >
            Wash & Fold
          </Text>

          <Image
            style={{ marginLeft: 5 }}
            source={require("../../assets/icon/dropdown.png")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginHorizontal: 10,
            marginRight: 29,
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(13),
              color: colors.secondary,
              lineHeight: 15,
              fontWeight: "400",
              width: horizontalScale(260),
            }}
          >
            2 x Tshirt{" "}
            <Text style={{ color: colors.pink, fontSize: moderateScale(12) }}>
              (Men)
            </Text>
          </Text>

          <Text
            style={{
              fontSize: moderateScale(13),
              color: colors.pink,
              lineHeight: 15,
              fontWeight: "400",
            }}
          >
            $2
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginHorizontal: 10,
            marginRight: 29,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(13),
              color: colors.secondary,
              lineHeight: 15,
              fontWeight: "400",
              width: horizontalScale(260),
            }}
          >
            3 x jeans{" "}
            <Text style={{ color: colors.pink, fontSize: moderateScale(12) }}>
              (Men)
            </Text>
          </Text>

          <Text
            style={{
              fontSize: moderateScale(13),
              color: colors.pink,
              lineHeight: 15,
              fontWeight: "400",
            }}
          >
            $2
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginHorizontal: 10,
            marginRight: 29,
          }}
        >
          <Text
            style={{
              width: horizontalScale(260),
              height: verticalScale(26),
              fontSize: moderateScale(16),
              color: colors.primary,
              lineHeight: 18,
              fontWeight: "500",
              marginVertical: 10,
            }}
          >
            Wash & Iron
          </Text>

          <Image
            style={{ marginLeft: 5 }}
            source={require("../../assets/icon/dropdown.png")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginHorizontal: 10,
            marginRight: 29,
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(13),
              color: colors.secondary,
              lineHeight: 15,
              fontWeight: "400",
              width: horizontalScale(260),
            }}
          >
            2 x Tshirt{" "}
            <Text style={{ color: colors.pink, fontSize: moderateScale(12) }}>
              (Men)
            </Text>
          </Text>

          <Text
            style={{
              fontSize: moderateScale(13),
              color: colors.pink,
              lineHeight: 15,
              fontWeight: "400",
            }}
          >
            $2
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginHorizontal: 10,
            marginRight: 29,
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: moderateScale(13),
              color: colors.secondary,
              lineHeight: 15,
              fontWeight: "400",
              width: horizontalScale(260),
            }}
          >
            3 x jeans{" "}
            <Text style={{ color: colors.pink, fontSize: moderateScale(12) }}>
              (Men)
            </Text>
          </Text>

          <Text
            style={{
              fontSize: moderateScale(13),
              color: colors.pink,
              lineHeight: 15,
              fontWeight: "400",
            }}
          >
            $2
          </Text>
        </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            // marginHorizontal: 10,
            // backgroundColor: 'red',
            width: '147%',
            marginTop: 10
            // marginRight: 29,
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
            justifyContent: "space-around",
            // alignItems: "center",
            // marginHorizontal: 10,
            // backgroundColor: 'red',
            width: '147%',
            marginRight: 30,
            marginTop: 5
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
            justifyContent: "space-around",
            // alignItems: "center",
            // marginHorizontal: 10,
            // backgroundColor: 'red',
            width: '154%',
            marginTop: 5
            // marginRight: 30,
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
      {/* //? middle */}

      {/* //? 2ndmiddle */}
      <ScrollView>
      <View style={{
          width: '100%',
          height: verticalScale(105),
          marginVertical: 10,
          borderColor: colors.pink,
          borderWidth: 0.2,
          padding: 10
        }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // marginHorizontal: 10,
            // marginVertical: 10,
            alignItems: "center",
          }}
        >
          <AntDesign
              style={{ marginTop: 5 }}
              name="calendar"
              size={moderateScale(16)}
              color={colors.pink}
            />
          <View
            style={{
              justifyContent: "space-evenly",
              alignItems: "center",
              marginRight: "33%",
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
              Order Status
            </Text>
          </View>
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
              View detail
            </Text>
        </View>

        <View style={{justifyContent: "space-evenly",flexDirection: "row",height: '57%'}}>
            <View style={{ flex: 2, justifyContent: "space-between",marginTop: 10}}>
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
            style={{ backgroundColor: colors.pink, height: "75%", width: "2%" ,left: '15%'}}
          />
            </View>

            <View style={{ flex: 12,}}>
            <View style={{ padding: 5 ,marginBottom: '6%',right: 20}}>
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
            </View>
        </View>
      </View>
      {/* //? 2ndmiddle */}
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
          height: verticalScale(100),
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
        <BottomBtn  choosedType={false} title={"Schedule a laundry"} />
      </View>
      {/* //? bottom  */}
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({});
