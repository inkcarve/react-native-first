import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import TimerMixin from 'react-timer-mixin';
import LetterAnimate from '../../animate/letter-animate';

export default class StartIndex extends Component<{}> {
  state={
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>內容</Text>
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
  center:{
    // flex: 2,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
