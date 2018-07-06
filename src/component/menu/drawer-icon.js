import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Platform, Animated, Easing } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Picker,
  Separator} from "native-base"
import {Actions} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';
import drawerIconJson from '../../lottie/drawer-icon.json'

import color from '../../style/color'
import coreStyle from "../../style/core-style"
import libStyle from "../../style/lib-style"
import dynamicStyle from "../../style/dynamic-style"

import UserStore from '../../store/user-store';
import ChapterService from '../../setting/chapter-service';
import ListButton from '../button/list-button'
const Item = Picker.Item;

export default class DrawerIcon extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    open:false,
    progress: new Animated.Value(0),
  }

  animateIconOpen(){
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.quad,
    }).start();
  }

  animateIconClose(){
    Animated.timing(this.state.progress, {
      toValue: 0,
      duration: 1000,
      easing: Easing.quad,
    }).start();
  }


  click(){
    console.log(this)
    if(!this.state.open){
    Actions.drawerOpen();
    this.animateIconOpen()
    this.state.open = true
  }else{
    Actions.drawerClose();
    this.animateIconClose()
    this.state.open = false
  }
  }  

  render() {
    return (
        <Button transparent icon style={[libStyle.absLayerTopRight,{zIndex:10000000,right:-50,top:0,width:50}]} onPress={()=>{this.click()}}>
          {/*<Content style={{paddingLeft:5}}>*/}
                {/*<View style={{position:'relative',flex:0,width:'100%',height:'100%'}}>*/}
                <LottieView source={drawerIconJson} progress={this.state.progress}/>
                {/*</View>*/}
            {/*<Icon name="ios-menu" style={[coreStyle.icon,{color:color.success}]} />*/}
          {/*</Content>*/}
        </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
});


