import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { store } from './src/store';
import Router from './src/routers';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
