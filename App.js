import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, StyleSheet, View } from "react-native";
import AddScreen from "./components/screens/AddScreen";
import EditItem from "./components/screens/EditItem";
import SelectCategory from "./components/Modal/SelectCategory";
import { Provider } from "react-redux";
import store from "./components/store/store";
import Tabs from "./components/Tabs";

const stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <stack.Navigator>
            <stack.Group>
              <stack.Screen
                name="Home"
                component={Tabs}
                options={{ headerShown: false }}
              />
              <stack.Screen name="Add Item" component={AddScreen} />
              <stack.Screen name="Edit Item" component={EditItem} />
            </stack.Group>
            <stack.Group
              screenOptions={{
                presentation: "transparentModal",
                headerShown: false,
                cardOverlayEnabled: true,
              }}
            >
              <stack.Screen
                name="SelectCategoryModal"
                component={SelectCategory}
              />
            </stack.Group>
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
