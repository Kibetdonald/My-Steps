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
        <Text style={styles.titleText1}>Your Activity</Text>
        <View style={styles.circlularview}>
          <Text>DK</Text>
        </View>
      </View>
      <DateScroll />
      <ScrollView>
        <HealthMonitoringCharts />
        <View style={styles.distanceView1}>
          <Text style={styles.titleText}>Steps</Text>
          <Text style={styles.titleText1}>7852</Text>
        </View>
        <View style={styles.distanceView}>
          <View>
            <Text style={styles.titleText}>Distance</Text>
            <Text style={styles.titleText1}>5.4 Km</Text>
          </View>
          <View>
            <Text style={styles.titleText}>Running</Text>
            <Text style={styles.titleText1}>18 Mins</Text>
          </View>
          <View>
            <Text style={styles.titleText}>Calories</Text>
            <Text style={styles.titleText1}>820</Text>
          </View>
        </View>
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
    paddingTop: 20,
  },
  circlularview: {
    borderWidth: 1,
    borderColor: "#0492C2",
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  distanceView:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  distanceView1:{
    paddingHorizontal: 20,
    paddingTop: 10
  },
  titleText:{
    color: "grey",
    fontSize: 20
  },
  titleText1:{
    fontWeight: "bold",
    fontSize: 24
  }
});
