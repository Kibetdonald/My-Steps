import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pedometer } from "expo-sensors";
import {
  MaterialCommunityIcons,
  Foundation,
  EvilIcons,
  Entypo,
  AntDesign,
  SimpleLineIcons,
  Fontisto 
} from "@expo/vector-icons";
import CircularProgress from "react-native-circular-progress-indicator";
import TopWrapper from "../Components/TopWrapper";
import DateScroll from "../Components/DateScroll"; 
import BottomNavigation from "../Components/BottomNavigation";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [stepCount, setStepCount] = useState(0);
  const [pedometerAvailability, setPedometerAvailability] = useState("");

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
  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);
  const handleRegistration = async () => {
    try {
      await AsyncStorage.setItem("isRegistered", "true");
      setIsRegistered(true);
    } catch (error) {
      console.error("Error saving registration status:", error);
    }
  };

  const subscribe = async () => {
    try {
      const result = await Pedometer.isAvailableAsync();
      setPedometerAvailability(String(result));

      if (result) {
        const subscription = Pedometer.watchStepCount(
          ({ steps }) => {
            setStepCount(steps);
          },
          { interval: 1000 }
        );

        return () => {
          subscription && subscription.remove();
        };
      }
    } catch (error) {
      setPedometerAvailability(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    subscribe();
  }, []);

  if (!isRegistered) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.welcome}
          source={require("../../assets/step.png")}
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
          <Text style={{ color: "#FFF" }}>Proceed</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <TopWrapper />
      <DateScroll />
      <ScrollView style={{ paddingHorizontal: 20, backgroundColor: "#F5F5F5" }}>
        <View style={styles.container2}>
          <Text style={styles.greeting}>
            {greeting}, {userName}
          </Text>
          <View style={styles.circlularview}>
            <Text>DK</Text>
          </View>
        </View>
        {/* First Row */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.stepView1}>
            <View style={styles.viewHeader}>
              <Text style={styles.viewText}>Walk</Text>
              <Foundation name="foot" size={24} color="#F5F5F5" />
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <CircularProgress
                // value={stepCount}
                value={2800}
                radius={50}
                duration={2000}
                progressValueColor={"#ecf0f1"}
                maxValue={6000}
                title={"Step Count"}
                titleColor={"#DDD"}
                titleStyle={{ fontWeight: "bold" }}
              />
            </View>
          </View>
          <View style={styles.stepView2}>
            <View style={styles.viewHeader}>
              <Text>Sleep</Text>
              <MaterialCommunityIcons
                name="power-sleep"
                size={24}
                color="black"
              />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", paddingTop: "35%" }}>
              <Text style={{fontWeight: "bold", fontSize: 26}}>05:43</Text>
              <Text style={{color: "#DDD"}}>Hours</Text>
            </View>
          </View>
        </View>
        {/* Second Row */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.stepView2}>
            <View style={styles.viewHeader}>
              <Text>Heart</Text>
              <AntDesign name="hearto" size={24} color="black" />
            </View>
            <View>
            <Image
           style={styles.heartImage}
          source={require("../../assets/health.jpg")}
        />
        <View style={{marginTop: 20, marginLeft: 20}}>
        <Text style={{fontWeight: "bold", fontSize: 24}}>104</Text>
        <Text style={{color: "#333"}}>BPM</Text>
        </View>
            </View>

          </View>
          <View style={styles.stepView2}>
            <View style={styles.viewHeader}>
              <Text>Water</Text>
              <Entypo name="water" size={24} color="black" />
            </View>
            <Image
           style={styles.waterImage}
          source={require("../../assets/water.jpg")}
        />
            <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{fontWeight: "bold", fontSize: 26}}>1.8</Text>
              <Text style={{color: "#333"}}>Litres</Text>
            </View>
          </View>
        </View>
        {/* Third Row */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.stepView2}>
          <View style={styles.viewHeader}>
              <Text>Best Record</Text>
              <Fontisto name="fire" size={24} color="black" />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", paddingTop: "35%" }}>
              <Text style={{fontWeight: "bold", fontSize: 26}}>8746 Steps</Text>
              <Text style={{color: "#333"}}>14th Jan 2024</Text>
            </View>
            </View>

          <View style={styles.stepView2}>
            <View style={styles.viewHeader}>
              <Text>Calories</Text>
              <SimpleLineIcons name="energy" size={20} color="black" />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", paddingTop: "35%" }}>
              <Text style={{fontWeight: "bold", fontSize: 26}}>780</Text>
              <Text style={{color: "#333"}}>Calories</Text>
            </View>
          </View>
        </View>

        {/* <ActivityCharts /> */}
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginLeft: 20,
  },
  container2: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
  stepView1: {
    height: width / 2,
    width: width / 2.6,
    borderRadius: 20,
    marginTop: 20,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    backgroundColor: "#0492C2",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  stepView2: {
    height: width / 2,
    width: width / 2.6,
    borderRadius: 20,
    marginTop: 20,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  viewHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 25,
    marginTop: 5,
    paddingTop: 8
  },
  viewText:{
     color: "#F5F5F5"
  },
  welcome: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%",
    marginTop: "10%",
  },
  heartImage:{
   marginTop: 10
  },
  waterImage:{
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
   },
  greeting: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "76%",
  },
  centerText: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: "black",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  cell: {
    flex: 1,
    padding: 10,
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
    backgroundColor: "#0492C2",
    padding: 15,
    width: "90%",
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
    marginTop: 10,
  },
});
