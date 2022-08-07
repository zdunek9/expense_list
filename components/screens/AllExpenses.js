import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { sortArrayASC, sumUp } from "../helpers/HelpersFunctions";
import RecentItem from "../RecentItem";
import { AntDesign } from "@expo/vector-icons";

function AllExpenses({ navigation }) {
  const itemsData = useSelector((state) => state.counter.items);
  const [sortedData, setSortedData] = useState(itemsData);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setSortedData(sortArrayASC([...itemsData]));
    setTotalCost(sumUp(itemsData));
  }, [itemsData]);

  function addItemHandler() {
    navigation.navigate("Add Item");
  }
  function editItemHandler(item) {
    navigation.navigate("Edit Item", {
      name: item.name,
      price: item.price,
      id: item.id,
    });
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.totalCostWrapper}>
        <Text style={styles.totalCost}>Total: {totalCost}$</Text>
      </View>
      <FlatList
        data={sortedData}
        keyExtractor={(itemData) => itemData.id}
        renderItem={(itemData) => (
          <RecentItem
            id={itemData.item.id}
            name={itemData.item.name}
            price={itemData.item.price}
            date={itemData.item.date}
            navigate={editItemHandler}
          />
        )}
      />
      <View style={styles.buttonWrapper}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.buttonStyle, styles.pressed] : styles.buttonStyle
          }
          onPress={addItemHandler}
        >
          <AntDesign name="plus" size={40} color="black" />
        </Pressable>
      </View>
    </View>
  );
}

export default AllExpenses;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  totalCostWrapper: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
  },
  totalCost: {
    fontSize: 20,
    width: "100%",
    textAlign: "right",
    padding: 15,
  },
  buttonWrapper: {
    position: "absolute",
    top: "80%",
    right: "5%",
    borderRadius: 50,
    overflow: "hidden",
  },
  buttonStyle: {
    fontSize: 20,
    padding: 15,
    backgroundColor: "#d2acac",
  },
  pressed: {
    opacity: 0.75,
  },
});
