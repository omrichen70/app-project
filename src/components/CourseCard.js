import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const CourseCard = ({ course }) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.name}>{course.name}</Card.Title>
      <Card.Divider />
      <Text style={styles.description} numberOfLines={6}>
        {course.description}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    marginBottom: 10,
    height: 200,
    width: 150,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    flex: 0,
  },
});

export default CourseCard;