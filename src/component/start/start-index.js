import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class StartIndex extends Component<{}> {
  state={
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>你好 (請在下方輸入你的名子)</Text>
        <TextInput/>
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
  }
});
