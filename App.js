import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import StartView from "./src/component/start-view"

export default class App extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StartView></StartView>
        <Text style={styles.content}>內容</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    opacity:0,
  }
});
