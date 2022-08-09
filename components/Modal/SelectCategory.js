import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import { nanoid } from "nanoid";
import { counterActions } from "../store/store";
import { useDispatch } from "react-redux";
import { Categories } from "../store/ExpCategories";
import { useCardAnimation } from "@react-navigation/stack";

function SelectCategory({ route, navigation }) {
  const { current } = useCardAnimation();

  const dispatch = useDispatch();
  function selectCat(catId) {
    dispatch(
      counterActions.addItem({
        date: new Date().toISOString(),
        id: nanoid(),
        name: route.params.name,
        price: route.params.price,
        cat: catId,
      })
    );
    navigation.navigate("Item List");
  }

  return (
    <View style={styles.mainWrapper}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [
              {
                scale: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.9, 1],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <Text style={styles.selectCategory}>Select Category</Text>
        <View style={styles.iconWrapper}>
          {Categories.map((item) => (
            <Pressable
              style={styles.singleItemWrapper}
              onPress={selectCat.bind(this, item.id)}
              key={item.id}
            >
              <Image style={styles.iconStyle} source={item.icon} />
              <Text style={styles.text}>{item.description}</Text>
            </Pressable>
          ))}
        </View>
      </Animated.View>
    </View>
  );
}
export default SelectCategory;
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  animatedView: {
    paddingVertical: 20,
    width: "90%",
    maxWidth: 400,
    borderRadius: 3,
    backgroundColor: "white",
    justifyContent: "center",
  },
  singleItemWrapper: {
    alignItems: "center",
    width: "33%",
    height: 80,
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  iconWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    color: "grey",
  },
  selectCategory: {
    textAlign: "center",
    fontSize: 30,
    margin: 30,
  },
});
