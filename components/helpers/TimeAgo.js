import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";
import { Text } from "react-native";

function TimeAgo({ timestamp }) {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeroid = formatDistanceToNow(date);
    timeAgo = `${timePeroid} ago`;
  }
  return <Text>{timeAgo} </Text>;
}

export default TimeAgo;
