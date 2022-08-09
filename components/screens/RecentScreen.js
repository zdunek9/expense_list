import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DropDown from "../DropDown";
import RecentItem from "../RecentItem";
import { useSelector } from "react-redux";
import { sub, parseISO } from "date-fns";
import {
  getDecimalPoint,
  sortArrayASC,
  sumUp,
} from "../helpers/HelpersFunctions";

function RecentScreen({ navigation }) {
  const itemsData = useSelector((state) => state.counter.items);
  const [sortedData, setSortedData] = useState(itemsData);
  const [lastSelectedFilter, setLastSelectedFilter] = useState("7"); //domyślnie sortuje 7 dni wstecz
  const [totalCost, setTotalCost] = useState(0);

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
  useEffect(() => {
    setTotalCost(sumUp(sortedData));
  }, [sortedData]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.totalCostWrapper}>
        <Text style={styles.textTotalCostWrapper}>Spent last {lastSelectedFilter} days</Text>
        <Text style={styles.dolarTotalCostWrapper}>$</Text>
        <Text style={styles.priceTotalCostWrapper}>{parseInt(totalCost)}</Text>
        <Text style={styles.decimalTotalCostWrapper}>.{getDecimalPoint(totalCost)}</Text>
      </View>
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
            id={itemData.item.id}
            name={itemData.item.name}
            price={itemData.item.price}
            date={itemData.item.date}
            cat={itemData.item.cat}
            navigate={editItemHandler}
          />
        )}
      />
    </View>
  );
}

export default RecentScreen;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  totalCostWrapper:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"flex-start",
    height: '35%'
  },
  textTotalCostWrapper:{
    width: "100%",
    textAlign:"center",
    color:"grey",
    fontWeight:'500'
  },
  priceTotalCostWrapper:{
    fontSize:55,
  },
  decimalTotalCostWrapper:{
    paddingTop:10,
    fontSize:25
  },
  dolarTotalCostWrapper:{
    paddingTop:10,
    fontSize:25,
    color:"grey",
    fontWeight:"300"
  }
});
