import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DropDown from "../DropDown";
import RecentItem from "../RecentItem";
import { useSelector } from "react-redux";
import { sub, parseISO } from "date-fns";
import { sumUp } from "../helpers/TimeAgo";

function RecentScreen({ navigation }) {
  const itemsData = useSelector((state) => state.counter.items);
  const [sortedData, setSortedData] = useState(itemsData);
  const [lastSelectedFilter, setLastSelectedFilter] = useState("7"); //domyślnie sortuje 7 dni wstecz
  const [totalCost, setTotalCost] = useState(0);

  function addItemHandler() {
    navigation.navigate("Add Item");
  }

  function sortArrayASC(newArray) {
    newArray.sort((a, b) => {
      let aDate = new Date(a.date);
      let bDate = new Date(b.date);
      return bDate - aDate;
    });
    return newArray;
  }
  function filterData(value) {
    setLastSelectedFilter(value);
    const dif = sub(new Date(), {
      days: value,
    });
    if (value === "7") {
      setSortedData(() => {
        const newArray = itemsData.filter(
          (element) => parseISO(element.date) > dif
        );
        sortArrayASC(newArray);
        return newArray;
      });
    } else if (value === "14") {
      setSortedData(() => {
        const newArray = itemsData.filter(
          (element) => parseISO(element.date) > dif
        );
        sortArrayASC(newArray);
        return newArray;
      });
    } else if (value === "30") {
      setSortedData(() => {
        const newArray = itemsData.filter(
          (element) => parseISO(element.date) > dif
        );
        sortArrayASC(newArray);
        return newArray;
      });
    }
  }
  useEffect(() => {
    setSortedData(itemsData);
    filterData(lastSelectedFilter);
  }, [itemsData, lastSelectedFilter]);
  useEffect(()=>{
    setTotalCost(sumUp(sortedData));
  },[sortedData])
  return (
    <View style={styles.wrapper}>
      <DropDown
        addItemHandler={addItemHandler}
        setChosenSort={(value) => filterData(value)}
        totalCost={totalCost}
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
