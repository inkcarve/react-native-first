//** import lib
import React, {Component} from 'react'
import { Animated, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import * as Animatable from "react-native-animatable"
import { Button , Container, Content, Grid, Row, Col, Icon, Footer, FooterTab} from "native-base"

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'

//** import custom
import ChapterService from "../../setting/chapter-service"
import mapContent from "../text/map-content"
import FooterNext from "../footer/footer-next"

export default class TextCenter extends Component<{}> {

  state={
    content:[]    
  };

  render() {
    // console.log('TextCenter')
    // console.log(this.props);
    
    this.state.content= ChapterService.chapterData.content;

    return (
      <Container style={styles.container}>
        <Content padder contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          {mapContent(this.state.content)}
        </Content>
        <FooterNext data={{id:this.props.id, secId:this.props.secId}} />
      </Container>
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
