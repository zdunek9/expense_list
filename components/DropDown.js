import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";

function DropDown({ addItemHandler, setChosenSort, totalCost }) {
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
      <Text style={styles.summaryPrice}>{totalCost}$ - </Text>
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
      <View style={styles.buttonWrapper}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.buttonStyle, styles.pressed] : styles.buttonStyle
          }
          onPress={addItemHandler}
        >
          <AntDesign
            name="plus"
            size={28}
            color="black"
          />
        </Pressable>
      </View>
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

  buttonWrapper: {
    borderRadius: 10,
    overflow: "hidden",
    marginLeft:10,
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: "#d2acac",
  },
  pressed: {
    opacity: 0.75,
  },
});
