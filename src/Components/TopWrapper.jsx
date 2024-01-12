import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TopWrapper() {
  return (
    <View>
      <Text style={styles.wrapper}>Activity</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: "#FF725E",
    paddingTop: 30,
    textAlign: "center",
    paddingBottom: 12,
    fontWeight: "bold"
  }
})