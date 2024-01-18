import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  AntDesign,
  Ionicons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BottomNavigation() {
  const navigation = useNavigation();
  const homeNavigate = () => {
    navigation.navigate("Home");
  };
  const activityNavigate = () => {
    navigation.navigate("Activity");
  };
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={24} color="#ddd" onPress={homeNavigate} />
      <Entypo name="circular-graph" size={24} color="#ddd" onPress={activityNavigate} /> 
      <Ionicons name="calendar" size={24} color="#ddd" />
      <AntDesign name="user" size={24} color="#ddd" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "#0492C2",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 50
  },
});
