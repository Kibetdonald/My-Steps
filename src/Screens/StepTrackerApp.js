import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Accelerometer } from 'react-native-sensors';
import { VictoryChart, VictoryLine } from 'victory-native';
 
function StepTrackerApp() { 
  const [stepCount, setStepCount] = useState(0);
 
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState('');
 
  useEffect(() => {
    checkRegistrationStatus();
  }, []);
 
  const checkRegistrationStatus = async () => {
    try {
      const registrationStatus = await AsyncStorage.getItem('isRegistered');
      if (registrationStatus) {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error('Error checking registration status:', error);
    }
  };
 
  const handleRegistration = async () => {
    try { 
      await AsyncStorage.setItem('isRegistered', 'true');
      setIsRegistered(true);
    } catch (error) {
      console.error('Error saving registration status:', error);
    }
  };
 
  const handleStepChange = (acceleration) => { 
    const newStepCount = Math.floor(acceleration.x * 100);
 
    setStepCount(newStepCount);
  };
 
  const accelerometerObservable = new Accelerometer();
  accelerometerObservable.subscribe(({ x }) => handleStepChange({ x }));
 
  if (!isRegistered) {
    return (
      <View>
        <Text>Welcome to My Step App</Text>
        <Text>Please enter your username:</Text>
        <TextInput
          placeholder="Enter your username"
          onChangeText={(text) => setUserName(text)}
        />
        <Button title="Register" onPress={handleRegistration} />
      </View>
    );
  }
 
  return (
    <View>
      <Text>Hello, {userName}!</Text>
      <Text>Step Count: {stepCount}</Text>
      <VictoryChart>
        <VictoryLine data={[]} />
      </VictoryChart>
    </View>
  );
}

export default StepTrackerApp;
