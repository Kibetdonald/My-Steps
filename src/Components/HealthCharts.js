import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart, BarChart } from "react-native-gifted-charts"; 

const HealthMonitoringCharts = () => { 
  const dayData = [
    { value: 30, label: "6am", frontColor: "#0492C2" },
    { value: 50, label: "8am", frontColor: "#0492C2" },
    { value: 0, label: "10am", frontColor: "#0492C2" },
    { value: 20, label: "12pm", frontColor: "#0492C2" },
    { value: 60, label: "2pm", frontColor: "#0492C2" },
    { value: 50, label: "4pm", frontColor: "#0492C2" },
    { value: 80, label: "6pm" ,frontColor: "#0492C2" },
    { value: 60, label: "8pm",frontColor: "#0492C2" }
  ];
  const weekData = [
    { value: 250, label: "M", frontColor: "#0492C2" },
    { value: 500, label: "T", frontColor: "#0492C2" },
    { value: 0, label: "W", frontColor: "#0492C2" },
    { value: 320, label: "T" , frontColor: "#0492C2" },
    { value: 600, label: "F", frontColor: "#0492C2" },
    { value: 256, label: "S" ,frontColor: "#0492C2" },
    { value: 300, label: "S" , frontColor: "#0492C2" }
  ];
  return (
    <View>
      <View>
        <Text style={styles.Title}>Steps During the Day</Text>
        <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="#0492C2"
          keys={["steps"]}
          data={dayData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>

      <View style={{ height: 5 }} />
      <View>
        <Text style={styles.Title}>Steps During the Week</Text>
        <LineChart
          data={weekData}
          keys={["steps"]}
          frontColor="#0492C2"
          xAxisColor="#0492C2"
          hideYAxis
          noOfSections={3}
          yAxisColor="#0492C2"
          color="#0492C2"          
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
    paddingTop: 2,
  },
});
