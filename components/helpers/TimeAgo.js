import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";
import { Text } from "react-native";

export function TimeAgo({ timestamp }) {
  // funkcja zwraca jaki czas temu zostal dodany wpis
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeroid = formatDistanceToNow(date);
    timeAgo = `${timePeroid} ago`;
  }
  return <Text>{timeAgo}</Text>;
}
export function sumUp(tab) {
  // funkcja sumuje wpisane itemy
  let sum = 0;
  tab.forEach((element) => {
    sum = sum + +element.price;
  });
  return sum.toFixed(2);
}

export function sortArrayASC(newArray) {
  // funkcja sortuje tablice po dacie rosnaco
  newArray.sort((a, b) => {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    return bDate - aDate;
  });
  return newArray;
}
