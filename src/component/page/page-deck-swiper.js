//** import lib
import React, {Component} from 'react'
import { Animated, StyleSheet, View, TouchableOpacity, Dimensions, Image, Easing } from 'react-native'
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
import {observer} from 'mobx-react'
import {observable} from 'mobx'
import LottieView from 'lottie-react-native';
import lottieSwipeJson from '../../lottie/swipe.json'

//** import style
import coreStyle from '../../style/core-style'
import libStyle from '../../style/lib-style'

//** import custom
import ChapterService from "../../setting/chapter-service"
import mapContent from "../text/map-content"
import FooterNext from "../footer/footer-next"
import HeaderBox from '../header/header-box'

@observer class PageDeckSwiper extends Component<{}> {

  @observable statistics={
      l:0,
      r:0,
      t:0,
      b:0,
      correct:0
    }
  @observable chapterData = ChapterService.getContent();
  @observable overlayer = true
  @observable footer = false 
  @observable turnOnSwiper = true
  @observable progress = new Animated.Value(0)

  state = {
    progress:0
  }

  handleViewRef = ref => this.view = ref;
  overlayerClick = ()=> {
    this.view.fadeOut(300).then(endState => {
      if(endState) {
        this.overlayer=false;
      }
    });
  }

  onSwipeCallBack = (data)=>{
    let card = this.chapterData.cards[data.index];
    this.statistics[data.side]++;
    if(card.value === data.side){
      this.statistics.correct++;
    }
  }

  onSwipeRight = i=>{console.log('onSwipeRight');
    this.onSwipeCallBack({side:'r',index:i})
    console.log(i)
  }

  onSwipeLeft = i=>{console.log('onSwipeLeft');
    this.onSwipeCallBack({side:'l',index:i})
    console.log(i)
  }

  onSwipedAll (){
    this.turnOnSwiper = false
  }

  deckSwiper = (cards)=>{
    return  (<Swiper cards={cards}
            cardStyle={{justifyContent:"center",top:0}}
            renderCard={(item) => {
                return (
              <View style={[coreStyle.containerCenter,{alignItems:"center",height:'100%'}]}>
              <Card transparent={true} style={{flex:0,height:'auto',width:'100%'}}>
                <CardItem cardBody>
                  <FastImage style={{
                      // resizeMode: "cover",
                      width: null,
                      flex: 1,
                      // height: 300
                    }} source={item.image} 
                  />
                </CardItem>
              </Card>
              </View>
                )
            }}
            onSwiped={(cardIndex) => {console.log(cardIndex)}}
            onSwipedLeft={this.onSwipeLeft}
            onSwipedRight={this.onSwipeRight}
            onSwipedAll={this.onSwipedAll}
            disableBottomSwipe = {true}
            cardIndex={0}
            backgroundColor={'transparent'}
            showSecondCard = {false}
            stackSize= {3}
            /*overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}*/
          /*animateOverlayLabelsOpacity*/
          /*animateCardOpacity*/>
            <Button
                onPress={() => {console.log('oulala')}}
                title="Press me">
                You can press me
            </Button>
          </Swiper>)
  }

  nativeBaseDeckSwiper=(cards)=>{
    return <DeckSwiper
            dataSource={cards}
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
          />
  }

  componentDidMount() {
    // this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
    console.log(this.state.progress)
    Animated.loop(Animated.timing(this.progress, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
    })).start();
  }

  render() {
    console.warn("page deck swiper render");

    return (

      <Container style={styles.container}>
        <HeaderBox>
        </HeaderBox>
          <View style={{flex:1,paddingLeft:12,paddingRight:12}}>
          {this.turnOnSwiper ? this.deckSwiper(this.chapterData.cards):null}
          {<Text>一共答對 {this.statistics.correct}</Text>}
          {/*this.nativeBaseDeckSwiper(this.chapterData.cards)*/}
        </View>
        
        {/*overlayer*/}
        {this.overlayer?(<TouchableOpacity onPress={this.overlayerClick}  style={[coreStyle.overlayer]}>
        <Animatable.View useNativeDriver={true} ref={this.handleViewRef}>
          <Container style={coreStyle.containerCenter}>
            <Content padder contentContainerStyle={{ 
                justifyContent: 'center',

                flex: 1 }}>
                {mapContent(this.chapterData.overlayer)}
                <View style={{position:'relative', height:140}}>
                <LottieView source={lottieSwipeJson} loop={true} progress={this.progress}/>
                </View>
            </Content>
          </Container>
      </Animatable.View>
      </TouchableOpacity>):null}

        {this.footer?<FooterNext data={{id:this.props.id, secId:this.props.secId}} /> : null}
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

export default PageDeckSwiper