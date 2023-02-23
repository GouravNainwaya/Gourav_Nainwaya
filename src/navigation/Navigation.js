import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderDetails from "../containers/OrderDetails";
import ScheduleAPickup from './../containers/ScheduleAPickup';
import OrdersList from './../containers/OrdersList';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OrdersList" component={OrdersList} />
        <Stack.Screen name="ScheduleAPickup" component={ScheduleAPickup} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});