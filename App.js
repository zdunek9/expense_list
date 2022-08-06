import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import AddScreen from "./components/screens/AddScreen";
import EditItem from "./components/screens/EditItem";
import { Provider } from "react-redux";
import store from "./components/store/store";
import Tabs from "./components/Tabs";

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name="Home"
              component={Tabs}
              options={{ headerShown: false }}
            />
            <stack.Screen name="Add Item" component={AddScreen} />
            <stack.Screen name="Edit Item" component={EditItem} />
          </stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ecec",
  },
});
