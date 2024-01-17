import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart, BarChart } from "react-native-gifted-charts";
import { LinearGradient, Stop } from "react-native-linear-gradient";

const HealthMonitoringCharts = () => {
  const dayData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
  const weekData = [
    { value: 250, label: "M" },
    { value: 500, label: "T", frontColor: "#177AD5" },
    { value: 745, label: "W", frontColor: "#177AD5" },
    { value: 320, label: "T" },
    { value: 600, label: "F", frontColor: "#177AD5" },
    { value: 256, label: "S" },
    { value: 300, label: "S" },
  ];
  return (
    <View>
      <View>
        <Text style={styles.Title}>Steps During the Day</Text>
        <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="#FF725E"
          keys={["steps"]}
          data={dayData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>

      <View style={{ height: 50 }} />
      <View>
        <Text style={styles.Title}>Steps During the Week</Text>
        <LineChart
          data={weekData}
          keys={["steps"]}
          frontColor="#FF725E"
          xAxisColor="#FF725E"
          hideYAxis
          noOfSections={3}
          yAxisColor="#FF725E"
          color="#FF725E"          
          yAxisThickness={0}
          xAxisThickness={0}
          smooth
          curve
        />
      </View>
    </View>
  );
};
export default HealthMonitoringCharts;
const styles = StyleSheet.create({
  Title: {
    alignContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 20,
  },
});
