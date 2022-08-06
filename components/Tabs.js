import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentScreen from "./screens/RecentScreen";
import AllExpenses from "./screens/AllExpenses";
import AddScreen from "./screens/AddScreen";
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Item List" component={RecentScreen} />
      <Tab.Screen name="All Expenses" component={AllExpenses} />
    </Tab.Navigator>
  );
}

export default Tabs;
