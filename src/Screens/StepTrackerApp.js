import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { AsyncStorage } from "react-native";
import { Accelerometer } from "expo-sensors";
import { AntDesign, Feather, EvilIcons } from "@expo/vector-icons";
// import { VictoryChart, VictoryLine } from 'victory-native';

function StepTrackerApp() {
  const [stepCount, setStepCount] = useState(0);

  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    checkRegistrationStatus();
  }, []);

  const checkRegistrationStatus = async () => {
    try {
      const registrationStatus = await AsyncStorage.getItem("isRegistered");
      if (registrationStatus) {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error("Error checking registration status:", error);
    }
  };

  const handleRegistration = async () => {
    try {
      await AsyncStorage.setItem("isRegistered", "true");
      setIsRegistered(true);
    } catch (error) {
      console.error("Error saving registration status:", error);
    }
  };

  const handleStepChange = (acceleration) => {
    const newStepCount = Math.floor(acceleration.x * 100);

    setStepCount(newStepCount);
  };

  //   const accelerometerObservable = new Accelerometer();
  //   accelerometerObservable.subscribe(({ x }) => handleStepChange({ x }));

  if (!isRegistered) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.welcome}
          source={require("../../assets/welcome.png")}
        />
        <View style={styles.centerText}>
          <Text style={styles.centerText}>Welcome to My-Step App</Text>
        </View> 
        <View style={styles.InputView}>
          <EvilIcons
            name="user"
            size={28}
            color="black"
            style={{ marginLeft: 10 }}
          />
          <TextInput
            placeholder="Enter your username"
            style={styles.input}
            onChangeText={(text) => setUserName(text)}
          />
        </View>

        <Pressable style={styles.btn} onPress={handleRegistration}>
          <Text style={{color: "#FFF"}}>Proceed</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View>
      <Text>Hello, {userName}!</Text>
      <Text>Step Count: {stepCount}</Text>
      {/* <VictoryChart>
        <VictoryLine data={[]} />
      </VictoryChart> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  welcome: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%",
    marginTop: "10%",
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "76%",
  },
  centerText: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20
  },
  InputView: { 
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    marginLeft: 20,
    marginTop: 40,
    height: 50,
    borderColor: "grey",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "#FF725E",
    padding: 15,
    width: "90%",
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
    marginTop: 10
  } 
});

export default StepTrackerApp;
