import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AddInput from "../AddInput";
import ButtonComponent from "../ButtonComponent";
import "react-native-get-random-values";

function AddScreen({ navigation }) {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  function addItemFunc() {
    const priceFormated = parseFloat(inputPrice.replace(",", ".")).toFixed(2);
    if (
      inputName.trim() === "" ||
      priceFormated === "0.00" ||
      priceFormated.trim() === "" ||
      isNaN(priceFormated)
    ) {
      Alert.alert("Wrong data", "Name or Price cannot be 0.");
      return;
    }
    navigation.navigate("SelectCategoryModal", {
      name: inputName,
      price: priceFormated,
    });
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.wrapper}>
          <View style={styles.parting}>
            <Text style={styles.title}>Name</Text>
            <AddInput
              text={"Enter Name"}
              onInputValue={inputName}
              onSetInputValue={setInputName}
              maxLength={50}
            />
          </View>
          <View style={styles.parting}>
            <Text style={styles.title}>Price</Text>
            <AddInput
              text={"Enter Price"}
              inputType={"numeric"}
              onInputValue={inputPrice}
              onSetInputValue={setInputPrice}
              maxLength={7}
            />
          </View>

          <View style={styles.buttons}>
            <View style={styles.button}>
              <ButtonComponent
                btnClickHandler={() => navigation.navigate("Item List")}
              >
                Cancel
              </ButtonComponent>
            </View>
            <View style={styles.button}>
              <ButtonComponent btnClickHandler={addItemFunc}>
                Add
              </ButtonComponent>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default AddScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  wrapper: {
    marginTop: 60,
    padding: 15,
    marginHorizontal:20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 6,
    shadowColor: '#52006A',
  },
  parting: {
    marginVertical: 25,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttons: {
    margin: 10,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    overflow: "hidden",
  },
});
