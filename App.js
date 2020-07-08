import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import List from './components/List';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Header />
      <List />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})