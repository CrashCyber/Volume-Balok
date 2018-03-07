import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>This is React Native!</Text>
        <Text>Tested by Eric Widhi Antara</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3333cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
