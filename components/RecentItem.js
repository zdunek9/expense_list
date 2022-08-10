import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { TimeAgo } from "./helpers/HelpersFunctions";
import { Categories } from "../components/store/ExpCategories";

function RecentItem({ id, name, price, date, navigate, cat }) {
  function editItemHandler() {
    navigate({
      id,
      name,
      price,
      date,
    });
  }
  function getCategories() {
    const newItem = Categories.find((item) => item.id === cat);
    return newItem.icon;
  }
  return (
    <Pressable
      onPress={editItemHandler}
      style={({ pressed }) =>
        pressed ? [styles.itemWrapper, styles.itemTap] : styles.itemWrapper
      }
    >
      <Image style={styles.iconStyle} source={getCategories()} />
      <View style={styles.nameDate}>
        <Text style={[{ fontSize: 19 }]}>{name}</Text>
        <TimeAgo timestamp={date} />
      </View>
      <View style={styles.price}>
        <Text style={styles.pricee}>{price}$</Text>
      </View>
    </Pressable>
  );
}

export default RecentItem;

const styles = StyleSheet.create({
  itemWrapper: {
    borderRadius: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    marginVertical: 10,
  },
  itemTap: {
    backgroundColor: "#d9d9d9",
  },
  price: {
    justifyContent: "center",
  },
  pricee: {
    fontSize: 20,
  },
  nameDate: {
    maxWidth: "75%",
    flex: 1,
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
});
