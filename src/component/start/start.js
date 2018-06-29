//** import lib
import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from "react-native-animatable";
import { Button , Container, Content, Grid, Row, Col} from "native-base"
import {Actions} from 'react-native-router-flux'

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'

//** import custom
import StartView from "./start-view";
import StartIndex from "./start-index";
import UserStore from "../../store/user-store"
import ChapterService from '../../setting/chapter-service'

let winSize = Dimensions.get('window');

export default class Start extends React.Component<{}> {

  state={
    startViewClick:false,
    startViewEnd:false,
  };

  handleViewRef = ref => this.view = ref;
  // overlayClick = ()=> {this.view.fadeOut(400);}

  startViewClick = ()=>{
    // console.log('startViewClick')
    // console.log(UserStore.userName)
    if(UserStore.userName){
      // Actions.textCenter({id:"1",secId:"0"});
      ChapterService.go();
    }else{
      this.view.fadeOut(400);
    }
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

  console.log('Start render')
    console.log(ChapterService)

    return (
      <View style={styles.container}>
      <View style={[libStyle.absLayerTopRight,libStyle.justifyFlexEnd]}>
      {this.state.startViewClick?null:<Button rounded light bordered onPress={this.startViewClick} style={[coreStyle.btn]}><Text>略過</Text></Button>}
      </View>
      <TouchableOpacity onPress={this.startViewClick}>
      {
      this.state.startViewEnd?null:(
        <Animatable.View useNativeDriver={true} ref={this.handleViewRef} onAnimationEnd={this.startViewEnd}>
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
