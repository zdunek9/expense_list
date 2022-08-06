import React from "react";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import AddInput from "../AddInput";
import ButtonComponent from "../ButtonComponent";
import { counterActions } from "../store/store";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

function AddScreen({ navigation }) {
  const [inputName, setInputName] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const dispatch = useDispatch();
  function addItemFunc() {
    if (
      inputName.trim() === "" ||
      parseFloat(inputPrice) === 0 ||
      inputPrice.trim() === ""
    ) {
      Alert.alert("Wrong data", "Name or Price cannot be 0.");
      return;
    }
    dispatch(
      counterActions.addItem({
        date: new Date().toISOString(),
        id: nanoid(),
        name: inputName,
        price: inputPrice.replace(/^0+/, ""),
      })
    );
    navigation.navigate("Item List");
  }
  // function cancellFunc(){
  //   navigation.navigate("Item List");
  // }
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
              inputType={"number-pad"}
              onInputValue={inputPrice}
              onSetInputValue={setInputPrice}
              maxLength={6}
            />
          </View>
          <View style={styles.buttons}>
            <View style={styles.button}>
              <ButtonComponent
                addItemFunc={() => navigation.navigate("Item List")}
              >
                Cancel
              </ButtonComponent>
            </View>
            <View style={styles.button}>
              <ButtonComponent addItemFunc={addItemFunc}>Add</ButtonComponent>
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
    marginTop: 100,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
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
