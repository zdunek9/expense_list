import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";

function DropDown({ addItemHandler, setChosenSort }) {
  const [filterData, setFilterData] = useState(1);
  let data = [
    { label: "Last 7 days", value: "7" },
    { label: "Last 14 days", value: "14" },
    { label: "Last 30 days", value: "30" },
  ];
  function getSortData(value) {
    setFilterData(value);
    setChosenSort(value);
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.summaryPrice}>21.37$ - </Text>
      <Dropdown
        data={data}
        style={styles.dropDownList}
        value={filterData}
        onChange={(e) => getSortData(e.value)}
        labelField="label"
        valueField="value"
        placeholder="Last 7 days"
        placeholderStyle={styles.placeholderStyle}
      />
      <AntDesign
        name="plus"
        size={28}
        color="black"
        style={styles.antDesign}
        onPress={addItemHandler}
      />
    </View>
  );
}

export default DropDown;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 15,
    backgroundColor: "white",
  },
  dropDownList: {
    flex: 1,
  },
  summaryPrice: {
    marginRight: 10,
    fontSize: 20,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  antDesign: {
    marginLeft: 20,
  },
});