import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart, BarChart } from "react-native-gifted-charts";
import { LinearGradient, Stop } from "react-native-linear-gradient";

const HealthMonitoringCharts = () => {
  const dayData = [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }];
   const weekData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'}
];
  return (
    <View>
      <View>
        <Text style={styles.Title}>Steps During the Day</Text>
        <BarChart
          data={dayData}
          keys={["steps"]}
          horizontal
          frontColor="#FF725E"
          gradient={
            <LinearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor="#45aaf2" />
              <Stop offset="100%" stopColor="#0050d0" />
            </LinearGradient>
          }
        />
      </View>

      <View style={{height:100 }}/>
      <View>
        <Text style={styles.Title}>Steps During the Week</Text>
        <LineChart
          data={weekData}
          keys={["steps"]}
          frontColor="#FF725E"
          smooth
          curve
          gradient={
            <LinearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0%" stopColor="#45aaf2" />
              <Stop offset="100%" stopColor="#0050d0" />
            </LinearGradient>
          }
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
    paddingTop: 20
  },
});
