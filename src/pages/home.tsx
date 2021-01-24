import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import { Counter } from '../components';

export default () => {
  return (
    <View style={styles.container}>
      <Counter />
      <Text style={styles.welcome}>Welcome to the Demo!</Text>
      <TouchableOpacity onPress={() => Actions.Google()}>
        <Text>Go to Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Actions.Medium()}>
        <Text>Go to Medium</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
