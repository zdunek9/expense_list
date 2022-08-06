import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddInput from "../AddInput";
import ButtonComponent from "../ButtonComponent";

function EditItem({ route }) {
  const [inputName, setInputName] = useState(route.params.name);
  const [inputPrice, setInputPrice] = useState(route.params.price);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Name:</Text>
      <AddInput
        text={inputName}
        onInputValue={inputName}
        onSetInputValue={setInputName}
        maxLength={50}
      />
      <Text style={styles.text}>Price</Text>
      <AddInput
        text={inputPrice}
        inputType={"number-pad"}
        onInputValue={inputPrice}
        onSetInputValue={setInputPrice}
        maxLength={6}
      />
      <View style={styles.buttons}>
        <ButtonComponent>Delete</ButtonComponent>
        <ButtonComponent>Submit</ButtonComponent>
      </View>
    </View>
  );
}

export default EditItem;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    padding: 15,
  },
  buttons:{
    marginTop:50,
    flexDirection:"row",
    justifyContent:"space-around"
  }

});
