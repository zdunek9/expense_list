import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentScreen from "./screens/RecentScreen";
import AllExpenses from "./screens/AllExpenses";
import { StyleSheet } from "react-native";
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabNavigation,
      }}
    >
      <Tab.Screen name="Item List" component={RecentScreen} />
      <Tab.Screen name="All Expenses" component={AllExpenses} />
    </Tab.Navigator>
  );
}

export default Tabs;
const styles = StyleSheet.create({
  tabNavigation: {
    position: "absolute",
    borderRadius: 10,
    bottom: 25,
    left: 25,
    right: 25,
    height: 90,
  },
});
