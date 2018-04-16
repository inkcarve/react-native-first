import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import FadeIn from '../animate/fade-in' 

export default class StartView extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        <FadeIn style={{width: 250, height: 50, backgroundColor: 'powderblue'}} >
          <Text>Wellcome</Text>
        </FadeIn>
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
});
