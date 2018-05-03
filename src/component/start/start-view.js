import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import TimerMixin from 'react-timer-mixin';
import LetterAnimate from '../../animate/letter-animate';

export default class StartView extends Component<{}> {
  state={
    startViewClick:false,
    titleEnd:false,
    subTitleEnd:false,
    titleOpacity:0
  };
  subTitleAnimEnd=()=>{
    this.setState({subTitleEnd:true});
  };
  titleAnimEnd=()=>{
    this.setState({titleEnd:true});
  };
  render() {
    return (
      <View style={styles.container}>
        <Animatable.Text animation="lightSpeedIn"
        duration={500}
        onAnimationEnd={this.subTitleAnimEnd}
        style={{fontSize:10, marginBottom:4}}>Welcome!</Animatable.Text>
        <LetterAnimate animation={"fadeIn"} fire={this.state.subTitleEnd}
          onAnimationEnd={this.titleAnimEnd}
          letters={"New-Customers"} 
          delay={50} 
          style={{ marginBottom:10, alignItems:'center',flexDirection:'row'}} 
          letterStyle={{fontSize:24, fontStyle:'italic'}}></LetterAnimate>
        }
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
