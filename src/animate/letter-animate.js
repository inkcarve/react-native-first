import React, { Component } from 'react';
import { StyleSheet, View, Animated, Text } from 'react-native';
import * as Aminatable from 'react-native-animatable';

export default class LetterAnimate extends Component {

  render() {
    console.warn('letter animate render');
    let delayNow = 0;
    let delay = this.props.delay;
    let letters = [];
    
    //** string or array
    console.log(typeof this.props.letters)
    if(typeof this.props.letters ==='string'){
      letters = this.props.letters.split('');
    }else{
      letters = this.props.letters;
    }

    let fadeInLetter = letters.map((letter, i)=>{
      delayNow+=delay;
      console.log(delayNow);
      let onAnimationEnd = ()=>{};
      console.log('i: '+i)
      if(i+1===letters.length){
        console.log('i+1===letter.length: '+(i+1===letter.length))
        onAnimationEnd = this.props.onAnimationEnd;
      }
      return (
        <Aminatable.Text 
        key={i.toString()} 
        animation={this.props.animation} delay={delayNow} onAnimationEnd={onAnimationEnd}
        style={this.props.letterStyle}>{letter}</Aminatable.Text>
      )
    })

    return (
      <View style={{...this.props.style}}>
        {this.props.fire ? fadeInLetter : null}
      </View>
    );
  }
}
