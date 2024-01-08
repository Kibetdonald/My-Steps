My Steps is a react native android app for keeping track of the number of steps that I make on a day basis as well as a weekly basis and generates a graph to show the trend.

## Technologies Used
#### @react-native-community/async-storage:
AsyncStorage serves as a simple, unencrypted, asynchronous, persistent, key-value storage system. It's used to store and retrieve the user's step count persistently on the device.
#### react-native-sensors:
This library provides access to device sensors. In this example, the Accelerometer sensor is used to capture device acceleration and estimate the number of steps taken.
#### victory-native:
Victory is a popular charting library for React Native. In this example, VictoryLine and VictoryChart are used to create a simple line chart to visualize the step count over time.

## Features
 **Step Tracking:** Monitor your daily step count using the device's accelerometer. 
 
 **Step History Chart:** Visualize your step count history through an interactive line chart.
 
 **Persistent Data storage:** Utilizes AsyncStorage for storing user details status and step count data.
