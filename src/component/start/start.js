import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StartView from "./start-view";
import StartIndex from "./start-index";
import * as Animatable from "react-native-animatable";
import coreStyle from '../../style/core-style'

// const StartView = Animatable.createAnimatableComponent(StartView);
export default class Start extends React.Component<{}> {
  state={
    startViewClick:false,
    startViewEnd:false,
  };
  startViewClick = ()=>{
    // alert('startViewClick')
    this.setState({'startViewClick':true});
  };
  startViewEnd = ()=>{
    this.setState({'startViewEnd':true});
    console.log("startViewEnd: "+this.state.startViewEnd);
  };

  render() {
  //   let StartViewBox = ()=>{
  //   return ();
  // }
    return (
      <View style={styles.container}>
      {
      this.state.startViewEnd?null:(<TouchableOpacity onPress={this.startViewClick}>
        <Animatable.View animation={this.state.startViewClick?"fadeOut":null} onAnimationEnd={this.startViewEnd}>
          <StartView></StartView>
        </Animatable.View>
      </TouchableOpacity>)
      }
      {/*<View style={styles.container}>*/}
      {this.state.startViewEnd?(<Animatable.View animation={"fadeIn"}><StartIndex></StartIndex></Animatable.View>):null}
      {/*</View>*/}
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
