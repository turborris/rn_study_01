import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './component/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the TurBorris World!</Text>
      <Button></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
