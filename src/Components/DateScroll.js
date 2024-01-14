import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const DateScroll = () => {
  const currentDate = new Date();
  const startIndex = 4;

  const dates = Array.from({ length: 10 }, (_, index) => {
    const offset = index - startIndex;
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + offset);
    return newDate;
  });

  const renderItem = ({ item }) => (
    <View style={[styles.dateContainer, styles.activeDate]}>
      <Text style={styles.dateText}>
        {item.toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={dates}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      contentContainerStyle={styles.scrollContainer}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={5}
    />
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeDate: {
    backgroundColor: "#ecf0f1",
  },
  dateText: {
    fontSize: 16,
  },
});

export default DateScroll;
