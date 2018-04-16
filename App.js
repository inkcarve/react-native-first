import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import StartView from "./src/component/start-view";
import * as Animatable from "react-native-animatable";
StartView = Animatable.createAnimatableComponent(StartView);
export default class App extends React.Component<{}> {
  state={
    startViewClick:false,
    startViewEnd:false,
  };
  render() {
    return (
      <View style={styles.container} onPress={()=>{this.state.startViewClick=true}}>
        <Animatable.StartView animation={this.state.startViewClick?"fadeOut":null} animationEnd={()=>{this.state.startViewEnd=true}}></Animatable.StartView>
        <Animatable.Text animation={this.state.startViewEnd?"fadeIn":null} style={styles.content}>內容</Animatable.Text>
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
