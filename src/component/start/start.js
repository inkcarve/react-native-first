import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import StartView from "./start-view";
import StartIndex from "./start-index";
import * as Animatable from "react-native-animatable";
// import {Container} from "native-base";
import coreStyle from '../../style/core-style'
import { Button , Container, Content, Grid, Row, Col} from "native-base"
// const StartView = Animatable.createAnimatableComponent(StartView);
let winSize = Dimensions.get('window');
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
    if(this.state.startViewEnd)return
    this.setState({'startViewEnd':true});
    console.log("startViewEnd: "+this.state.startViewEnd);
  };

  render() {
  //   let StartViewBox = ()=>{
  //   return ();
  // }
    return (
      <View style={styles.container}>
      <View style={[coreStyle.absLayerTopRight,coreStyle.justifyFlexEnd]}>
      {this.state.startViewClick?null:<Button rounded warning onPress={this.startViewClick}><Text style={[{color:"#fff"},coreStyle.btn]}>略過</Text></Button>}
      </View>
      <TouchableOpacity onPress={this.startViewClick}>
      
      {
      this.state.startViewEnd?null:(
        <Animatable.View animation={this.state.startViewClick?"fadeOut":null} onAnimationEnd={this.startViewEnd}>
          <StartView></StartView>
        </Animatable.View>
      )
      }
      </TouchableOpacity>
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
    width:'100%',
  },
  content:{
    opacity:0,
  }
});
