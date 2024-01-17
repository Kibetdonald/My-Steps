import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import TopWrapper from "../Components/TopWrapper";
import DateScroll from "../Components/DateScroll";
import BottomNavigation from "../Components/BottomNavigation";
import HealthMonitoringCharts from "../Components/HealthCharts";

export default function ActivityScreen() {
  return (
    <View style={{ flex: 1 }}>
      <TopWrapper />
      <View style={styles.ActivityHeader}>
        <Text className="text-green-700">Your Activity</Text>
        <View style={styles.circlularview}>
          <Text>DK</Text>
        </View>
      </View>
      <DateScroll />
      <ScrollView>
        <HealthMonitoringCharts />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  ActivityHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  circlularview: {
    borderWidth: 1,
    borderColor: "#FF725E",
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
