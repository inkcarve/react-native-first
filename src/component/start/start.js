//** import lib
import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from "react-native-animatable";
import { Button , Container, Content, Grid, Row, Col} from "native-base"
import {Actions} from 'react-native-router-flux'

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'

//** import custom
import StartView from "./start-view"
import StartIndex from "./start-index"
import UserStore from "../../store/user-store"
import ChapterService from '../../setting/chapter-service'

export default class Start extends React.Component<{}> {

  state={
    startViewClick:false,
    startViewEnd:false,
  }

  handleViewRef = ref => this.view = ref;
  // overlayClick = ()=> {this.view.fadeOut(400);}

  startViewClick = ()=>{
    // console.log('startViewClick')
    // console.log(UserStore.userName)
    if(!UserStore.userData || !UserStore.userData.name){
      // Actions.textCenter({id:"1",secId:"0"});
      this.view.fadeOut(400).then(endState=>{
        if(endState){
          this.setState({'startViewEnd':true});
          this.setState({'startViewClick':true});
        }
      });
    }else{
      ChapterService.go();
    }
  }

  render() {

    ChapterService.init()

    return (
      <View style={styles.container}>
      <View style={[libStyle.absLayerTopRight,libStyle.justifyFlexEnd]}>
      {this.state.startViewClick?null:<Button rounded light bordered onPress={this.startViewClick} style={[coreStyle.btn]}><Text>略過</Text></Button>}
      </View>
      <TouchableOpacity onPress={this.startViewClick}>
      {
      this.state.startViewEnd?null:(
        <Animatable.View useNativeDriver={true} ref={this.handleViewRef}>
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
