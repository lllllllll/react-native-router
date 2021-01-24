import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from 'react-redux';

import { fetchCounter } from '../store/actions';

export default () => {
  const dispatch = useDispatch();
  const getCounter = useSelector(({counter}: any) => counter.counter);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{getCounter || 0}</Text>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(fetchCounter(getCounter + 1))}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
