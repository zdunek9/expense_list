import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentScreen from "./screens/RecentScreen";
import AllExpenses from "./screens/AllExpenses";
import { Image, StyleSheet } from "react-native";
import { Octicons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabNavigation,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "rgb(196, 196, 212)"
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="bars" size={30} color={color} />
          ),
        }}
        name="Item List"
        component={RecentScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="history" size={25} color={color} />
          ),
        }}
        name="All Expenses"
        component={AllExpenses}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
const styles = StyleSheet.create({
  tabNavigation: {
    height: 80,
  },
});
