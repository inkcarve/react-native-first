import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import FadeIn from '../animate/fade-in';
import * as Animatable from 'react-native-animatable';

export default class StartView extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:10, marginBottom:10}}>Welcome</Text>
        <FadeIn style={{}}>
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center'}, {fontSize:24 }}>Wellcome</Animatable.Text>
          {/*<Text animation="plus" easing="ease-out" iterationCount="infinite">Wellcome</Text>*/}
          {/*<Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>*/}
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
