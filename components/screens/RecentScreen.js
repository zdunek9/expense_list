import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DropDown from "../DropDown";
import RecentItem from "../RecentItem";
import { useSelector } from "react-redux";
import {
  sub,
  parseISO,
} from "date-fns";

function RecentScreen({ navigation }) {
  // const itemsData = useSelector((state) => state.counter.items);
  const itemsData = [
    {
      date: "2022-07-30",
      id: "zDf6poXK1CcCXjFfzuw4fY",
      name: "1",
      price: "255",
    },
    {
      date: "2022-07-23",
      id: "zDf6poXK1CcCXjFfzu44fY",
      name: "2",
      price: "256",
    },
    {
      date: "2022-07-20",
      id: "zDf6poXK1CcCXjFfzu4f2Y",
      name: "3",
      price: "285",
    },
    {
      date: "2022-08-01",
      id: "zDf6poXK1CceCXjFfzu4f2Y",
      name: "4",
      price: "285",
    },
    {
      date: "2022-07-15",
      id: "zDf6poXK1CcCXjdFfzu4f2Y",
      name: "5",
      price: "285",
    },
    {
      date: "2022-07-01",
      id: "zDf6poXK1CcCXjFfzud4f2Y",
      name: "6",
      price: "285",
    },
  ];
  const [sortedData, setSortedData] = useState(itemsData);

  function addItemHandler() {
    navigation.navigate("Add Item");
  }
  function filterData(value) {
    const dif = sub(new Date(), {
      days: value,
    });
    if (value === "7") {
      setSortedData(() => {
        const newArray = itemsData.filter(
          (element) => parseISO(element.date) > dif
        );
        return newArray;
      });
    } else if (value === "14") {
      setSortedData(() => {
        const newArray = itemsData.filter(
          (element) => parseISO(element.date) > dif
        );
        return newArray;
      });
    } else if (value === "30") {
      setSortedData(() => {
        const newArray = itemsData.filter(
          (element) => parseISO(element.date) > dif
        );
        return newArray;
      });
    }
    // setSortedData(itemsData);
  }
  // useEffect(() => {
  //   setSortedData(itemsData);
  // }, [itemsData]);
  console.log(sortedData);
  return (
    <View style={styles.wrapper}>
      <DropDown
        addItemHandler={addItemHandler}
        setChosenSort={(value) => filterData(value)}
      />
      <FlatList
        data={sortedData}
        keyExtractor={(itemData) => itemData.id}
        renderItem={(itemData) => (
          <RecentItem
            name={itemData.item.name}
            price={itemData.item.price}
            date={itemData.item.date}
          />
        )}
      />
    </View>
  );
}

export default RecentScreen;
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    flex: 1,
  },
});
