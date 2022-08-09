import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import AddInput from "../AddInput";
import ButtonComponent from "../ButtonComponent";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/store";

function EditItem({ route, navigation }) {
  const [inputName, setInputName] = useState(route.params.name);
  const [inputPrice, setInputPrice] = useState(route.params.price);
  const dispatch = useDispatch();
  function deleteItemHandler() {
    Alert.alert("Confirm", "Are you sure you want to delete item?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Ok",
        onPress: () => {
          dispatch(counterActions.removeItem(route.params.id));
          navigation.navigate("Item List");
        },
      },
    ]);
  }
  function editHandler() {
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
    if (inputName !== route.params.name) {
      dispatch(
        counterActions.changeName({ id: route.params.id, name: inputName })
      );
    }
    if (inputPrice !== route.params.price) {
      dispatch(
        counterActions.changePrice({
          id: route.params.id,
          price: priceFormated,
        })
      );
    }
    if (inputName === route.params.name && inputName === route.params.price) {
      Alert.alert("Something went wrong", "You entered the wrong data.");
      return;
    }
    navigation.navigate("Item List");
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Name:</Text>
      <View style={styles.input}>
        <AddInput
          text={inputName}
          onInputValue={inputName}
          onSetInputValue={setInputName}
          maxLength={50}
        />
      </View>
      <Text style={styles.text}>Price</Text>
      <View style={styles.input}>
        <AddInput
          text={inputPrice}
          inputType={"numeric"}
          onInputValue={inputPrice}
          onSetInputValue={setInputPrice}
          maxLength={7}
        />
      </View>
      <View style={styles.buttons}>
        <ButtonComponent btnClickHandler={deleteItemHandler}>
          Delete
        </ButtonComponent>
        <ButtonComponent btnClickHandler={editHandler}>Submit</ButtonComponent>
      </View>
    </View>
  );
}

export default EditItem;
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
    marginHorizontal:20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 6,
    shadowColor: '#52006A',
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    padding: 15,
  },
  buttons: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    paddingHorizontal: 20,
  },
});
