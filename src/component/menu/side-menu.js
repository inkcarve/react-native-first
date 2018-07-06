import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Platform, Image, findNodeHandle } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Container,
  Header,
  Title,
  Content,
  Button,
  Icon,

  ListItem,
  List,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Picker,
  Separator} from "native-base"
import {Actions} from 'react-native-router-flux'
import FastImage from 'react-native-fast-image'
// import { BlurView } from 'react-native-blur';

import coreStyle from "../../style/core-style"
import libStyle from "../../style/lib-style"
import dynamicStyle from "../../style/dynamic-style"

import UserStore from '../../store/user-store';
import ChapterService from '../../setting/chapter-service';
import ListButton from '../button/list-button'
import DrawerIcon from './drawer-icon'

const Item = Picker.Item;

export default class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewRef: null
    };
  }

  goIndex(){
    ChapterService.goIndex();
    UserStore.navIconClose()
  }

  imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  async clearData(){
    
    ChapterService.clearData()
    
  }

  render() {

    console.log('render drawer')

    return (
    
        <Container style={[libStyle.bgNone]} {...this.props}>
        <DrawerIcon>
  </DrawerIcon>
{/*        <Image source={require('../../image/garfield.png')}
          ref={(img) => { this.backgroundImage = img; }}
          style={styles.absolute}
          onLoadEnd={this.imageLoaded.bind(this)} 
          />*/}
      {/*  <BlurView
          style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0, right: 0,
          }}
          viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={10}
        />*/}
{/*        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Icon</Title>
          </Body>
          <Right />
        </Header>*/}

        <View style={[{padding:0,flex:1,flexDirection:'column',justifyContent:'flex-start',alignItems:'stretch'},libStyle.bgNone]}>
          <Content style={[libStyle.bgNone]}>
          <Separator bordered noTopBorder style={coreStyle.saparator}/>
            <List>
              <ListButton onPress={this.goIndex} leftIcon="ios-home" bodyText="回到首頁" rightIcon="ios-arrow-forward"/>
              <ListButton last onPress={this.clearData} leftIcon="ios-refresh-circle" bodyText="重置資料" rightIcon="ios-arrow-forward"/>
              {/*<Separator bordered />*/}
            </List>
          </Content>
        </View>
      </Container>

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


