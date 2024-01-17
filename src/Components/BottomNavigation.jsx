import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  AntDesign,
  Ionicons,
  SimpleLineIcons,
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
      <FontAwesome name="home" size={24} color="black" onPress={homeNavigate} />
      <SimpleLineIcons name="graph" size={24} color="black" onPress={activityNavigate} />
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
