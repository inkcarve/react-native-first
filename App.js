import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StartView from "./src/component/start-view";
import * as Animatable from "react-native-animatable";
// const StartView = Animatable.createAnimatableComponent(StartView);
export default class App extends React.Component<{}> {
  state={
    startViewClick:false,
    startViewEnd:false,
  };
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>{ alert('press');this.state.startViewClick=true}}>
        <Animatable.View animation={this.state.startViewClick?"fadeOut":null} >
          <StartView></StartView>
        </Animatable.View>
        <Animatable.Text animation={this.state.startViewEnd?"fadeIn":null} style={styles.content}>內容</Animatable.Text>
      </TouchableOpacity>
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
