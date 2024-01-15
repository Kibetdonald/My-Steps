import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={24} color="black" />
      <SimpleLineIcons name="graph" size={24} color="black" />
      <Ionicons name="calendar" size={24} color="black" />
      <AntDesign name="user" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#FF725E",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50
  },
});
