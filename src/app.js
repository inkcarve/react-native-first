import React from 'react';
import {AsyncStorage, SafeAreaView, StatusBar, Dimensions, View} from 'react-native';
import SideMenu from './component/menu/side-menu';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
import {getTheme, StyleProvider, platform} from 'native-base'

import nativeBaseVar from "./style/native-base-var"
import RouterList from './router/router-list'
import ChapterService from './setting/chapter-service'
import chapterList from "./setting/chapter-list"
import {observer} from 'mobx'
import UserStore from './store/user-store'
import DrawerIcon from './component/menu/drawer-icon'


let winSize = Dimensions.get('window');

// global.UserStore = UserStore;
// UserStore;
let init = async ()=>{ 
  await ChapterService.init()
// setTimeout(()=>{Actions.drawerOpen()},1000)
}

init().then(res=>{console.log('ok')}).catch(err=>{console.error('app init error');console.error(err)})


const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const chapter = ()=>{
  let output = Object.keys(RouterList).map((key,i)=>{
    obj = RouterList[key];
    return (<Scene key={obj.name} path={obj.path} component={obj.component} hideNavBar = {obj.hideNavBar} navTransparent>
      </Scene>)
  })
  return output;
}


const App = () => (
  <SafeAreaView style={{flex:1}}>
  <StatusBar hidden={true} />

  
{/*  <View style={{flex:1, alignItems:'stretch', zIndex:99999}}>*/}
  <StyleProvider style={getTheme(nativeBaseVar)}>


  <Router wrapBy={observer}>
  <Lightbox key="lightbox">
    <Stack key="root">
      <Drawer key="SideMenu" 
       drawerIcon={null}
       contentComponent={SideMenu} 
       drawerWidth={winSize.width-50}
       drawerBackgroundColor='rgba(255,255,255, 0.95)'
       hideDrawerButton={true}
       hideNavBar>
        {chapter()}
      </Drawer>
    </Stack>
    </Lightbox>
  </Router>

  </StyleProvider>
  {/*</View>*/}
  </SafeAreaView>
)



export default App;