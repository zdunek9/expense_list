import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";
import { Text } from "react-native";

export function TimeAgo({ timestamp }) {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeroid = formatDistanceToNow(date);
    timeAgo = `${timePeroid} ago`;
  }
  return <Text>{timeAgo}</Text>;
}
export function sumUp(tab) {
  let sum = 0;
  tab.forEach((element) => {
    sum = sum + +element.price;
  });
  return sum;
}
