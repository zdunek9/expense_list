import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function ButtonComponent({ children, addItemFunc }) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.buttonStyle, styles.pressed] : styles.buttonStyle
        }
        onPress={addItemFunc}
      >
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
}

export default ButtonComponent;
const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonStyle: {
    fontSize: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "#d2acac",
  },
  pressed: {
    opacity: 0.75,
  },
});
