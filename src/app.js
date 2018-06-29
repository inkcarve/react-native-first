import React from 'react';
import {AsyncStorage, SafeAreaView} from 'react-native';
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




// global.UserStore = UserStore;
// UserStore;
let init = async ()=>{
  // console.log('app init')
// await UserStore.set({userName:"測試1"});
// await UserStore.set({userData:{age:"18",name:"測試1"}}); 
await UserStore.load();
console.log(UserStore.chapterData)
// ChapterService.reset()
if(!UserStore.chapterData.ids){
ChapterService.reset()
}else{
ChapterService.turnTo(UserStore.chapterData.ids)
}
// console.warn(global.UserStore); 
}

init().then(res=>{console.log('ok')}).catch(err=>{console.error('app init error');console.error(err)})

// console.warn(global.UserStore);
// AsyncStorage.getAllKeys((err, keys)=>{
//   console.log('all keys---')
//   console.log(keys)
// })

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
  <StyleProvider style={getTheme(nativeBaseVar)}>
  <Router wrapBy={observer}>
  <Lightbox key="lightbox">
    <Stack key="root">
      <Drawer key="SideMenu" 
       drawerIcon={<DrawerIcon />}
       contentComponent={SideMenu} 
       hideNavBar>
        {chapter()}
      </Drawer>
    </Stack>
    </Lightbox>
  </Router>

  </StyleProvider>
  </SafeAreaView>
)



export default App;