import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import FadeIn from '../animate/fade-in';
import * as Animatable from 'react-native-animatable';
import TimerMixin from 'react-timer-mixin';

export default class StartView extends Component<{}> {
  // mixins=[TimerMixin];
  state={
    startViewClick:false,
    titleEnd:false,
    subTitleEnd:false,
    titleOpacity:0
  };
  subTitleAnimEnd=()=>{
// setTimeout(()=>{this.setState({subTitleEnd:true})}, 1000})
// this.setState({subTitleEnd:true});
// alert('subTitleAnimEnd')
// this.state.subTitleEnd = true;
// this.state.titleOpacity=1;
  }
  render() {
    return (
      <View style={styles.container}>
        <Animatable.Text animation="lightSpeedIn"
        duration={500}
        onAnimationEnd={()=>{this.setState({subTitleEnd:true});}}
        style={{fontSize:10, marginBottom:4}}>Welcome!</Animatable.Text>
        {/*<Animatable.View>*/}
          <Animatable.Text
          /*animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          */
          animation={this.state.subTitleEnd?"bounceIn":null}
          onAnimationEnd={()=>{this.setState({titleEnd:true});}}
          style={{ textAlign: 'center', fontSize:24, fontStyle:'italic' , marginBottom:10 ,opacity:0}}>
          New-Customers
          </Animatable.Text>
        {/*</Animatable.View>*/}
        <Animatable.View animation="fadeIn">
          <Animatable.Text delay={500}
          easing="ease-out"
          iterationCount="infinite" animation={this.state.titleEnd?"pulse":null} style={styles.center,{opacity:this.state.titleEnd?1:0}}>開始旅程</Animatable.Text>
        </Animatable.View>
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
