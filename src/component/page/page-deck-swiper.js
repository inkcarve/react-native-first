//** import lib
import React, {Component} from 'react'
import { Animated, StyleSheet, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import * as Animatable from "react-native-animatable"
import {  Container,
  Content,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body} from "native-base"
import Swiper from 'react-native-deck-swiper'
import FastImage from 'react-native-fast-image'

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'

//** import custom
import ChapterService from "../../setting/chapter-service"
import mapContent from "../text/map-content"
import FooterNext from "../footer/footer-next"
import HeaderBox from '../header/header-box'

export default class PageDeckSwiper extends Component<{}> {

  state={
    chapterData:{},
    overlayer:true,
    footer:false,
  };
  handleViewRef = ref => this.view = ref;
  overlayerClick = ()=> {
    this.view.fadeOut(400).then(endState => {
      if(endState) {
        this.setState({overlayer:false});
      }
    });
  }

  onSwipeRight = item=>{console.log('onSwipeRight');
    console.log(item)
}
  onSwipeLeft = item=>{console.log('onSwipeLeft');
    console.log(item)
}

  render() {
    console.warn(this.props);

    this.state.chapterData = ChapterService.getContent();

    return (

      <Container style={styles.container}>
        <HeaderBox>
        </HeaderBox>
          <View style={{flex:1,padding:12}}>
          <Swiper style={coreStyle.containerCenter} cards={this.state.chapterData.cards}
            renderCard={(item) => {
                return (
                    // <View style={[coreStyle.containerCenter,{height:'100%'}]}>
                    //     <Text >{card}</Text>
                    // </View>
                    <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    {/*<Thumbnail source={item.image} />*/}
                    <Body>
                      <Text>
                        {item.text}
                      </Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <FastImage style={{
                      resizeMode: "cover",
                      width: null,
                      flex: 1,
                      height: 300
                    }} source={item.image} 
                  />
                </CardItem>
                <CardItem>

                  <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
                  <Text>
                    {item.name}
                  </Text>
                </CardItem>
              </Card>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedAll={() => {console.log('onSwipedAll')}}
            cardIndex={0}
            backgroundColor={'#4FD0E9'}
            stackSize= {3}>
            <Button
                onPress={() => {console.log('oulala')}}
                title="Press me">
                You can press me
            </Button>
          </Swiper>
     {/*     <DeckSwiper
            dataSource={this.state.chapterData.cards}
            looping={false}
            onSwipeRight={this.onSwipeRight}
            onSwipeLeft={this.onSwipeLeft}
            renderEmpty={() =>
              <View>
                <Text>Over</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>
                        {item.text}
                      </Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{
                      resizeMode: "cover",
                      width: null,
                      flex: 1,
                      height: 300
                    }} source={item.image}
                  />
                </CardItem>
                <CardItem>

                  <IconNB name={"ios-heart"} style={{ color: "#ED4A6A" }} />
                  <Text>
                    {item.name}
                  </Text>
                </CardItem>
              </Card>}
          />*/}
        </View>
        
        {/*overlayer*/}
        {this.state.overlayer?<TouchableOpacity onPress={this.overlayerClick}  style={[coreStyle.overlayer]}>
        <Animatable.View useNativeDriver={true} ref={this.handleViewRef}>
          <Container style={coreStyle.containerCenter}>
            <Content padder contentContainerStyle={{ 
                justifyContent: 'center',
                flex: 1 }}>
                {mapContent(this.state.chapterData.overlayer)}
            </Content>
          </Container>
      </Animatable.View>
      </TouchableOpacity>:null}

        {this.state.footer?<FooterNext data={{id:this.props.id, secId:this.props.secId}} /> : null}
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content:{
    opacity:0,
  }
});
