import React, { Component } from 'react'
import { StyleSheet, Text, View, Animated, TextInput, AsyncStorage } from 'react-native'
import * as Animatable from 'react-native-animatable'
import {Item, Input, Button} from "native-base"
import coreStyle from "../../style/core-style"
import {Container} from "native-base"


export default class StartIndex extends Component<{}> {
  state={
    name:null,
    formValid:false
  };

  nameChange = (text)=>{
    if(text.length > 12){
      this.setState({formValid:false})
      return
    }
    this.setState({formValid:true})
    console.log("name:"+text);
    this.setState({name:text})
  }

  submit = ()=>{
    if(this.state.formValid){
      AsyncStorage.setItem("userName", this.state.name)
      AsyncStorage.getAllKeys((err, keys)=>{
  console.log('all keys---')
  console.log(keys)
})
    }else{
      alert("名子不可超過12個字")
    }
  }

  render() {
    return (
      <View style={coreStyle.container}>
        <Text>你好 (請在下方輸入想使用的名子)</Text>
        <Item>
          <Input style={{minWidth:250}} onChangeText={value=>this.nameChange(value)} value={this.state.name}/>
        </Item>
        <View style={coreStyle.justifyCenter}>
          <Button light={this.state.formValid} disabled={!this.state.formValid} onPress={this.submit}><Text>送出</Text></Button>
        </View>
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
  }
});
