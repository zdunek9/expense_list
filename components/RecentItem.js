import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TimeAgo } from "./helpers/HelpersFunctions";

function RecentItem({id, name, price, date,navigate }) {
  function editItemHandler(){
    navigate({
      id,
      name,
      price,
      date
    })
  }
  return (
    <Pressable onPress={editItemHandler}>
      <View style={styles.itemWrapper}>
        <View style={styles.nameDate}>
          <Text style={[{ fontSize: 19 }]}>{name}</Text>
          <TimeAgo timestamp={date} />
        </View>
        <View style={styles.price}>
          <Text style={styles.pricee}>{price}$</Text>
        </View>
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
    backgroundColor: "white",
    padding: 15,
    marginVertical: 10,
  },
  price: {
    justifyContent: "center",
  },
  pricee: {
    fontSize: 20,
  },
  nameDate: {
    maxWidth: "75%",
  },
});
