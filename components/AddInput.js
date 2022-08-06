import React from "react";
import { StyleSheet, TextInput } from "react-native";

function AddInput({ text, onSetInputValue, inputValue, inputType, maxLength }) {
  return (
    <TextInput
      placeholder={text}
      style={styles.input}
      keyboardType={inputType}
      onChangeText={(e) => onSetInputValue(e)}
      value={inputValue}
      maxLength={maxLength}
    />
  );
}

export default AddInput;
const styles = StyleSheet.create({
  input: {
    fontStyle: "italic",
    padding: 10,
  },
});
