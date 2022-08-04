import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import AddScreen from "./components/screens/AddScreen";
import { Provider } from "react-redux";
import store from "./components/store/store"
import RecentScreen from "./components/screens/RecentScreen";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <stack.Navigator>
            <stack.Screen name="Item List" component={RecentScreen} />
            <stack.Screen name="Add Item" component={AddScreen} />
          </stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ecec",
  },
});
