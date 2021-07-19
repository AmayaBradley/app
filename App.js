import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed")
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("Text clicked")}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    justifyContent: "center",
    alignItems: "center",
    
  },
});
