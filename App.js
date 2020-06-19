import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigator from './drawer';
export default function App() {
  return (
    <View style={styles.container}>
      <Navigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },


});
