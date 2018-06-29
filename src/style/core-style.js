import { StyleSheet } from 'react-native';
import libStyle from './lib-style';
console.log(libStyle)
let coreStyleData = {
  containerCenter: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  btn:{
    paddingTop:5,
    paddingBottom:5,
    paddingRight:14,
    paddingLeft:14,
    height:"auto",
    width:"auto",
  },
  p:{
    padding:5,
    paddingBottom:10,
  },
  header:{
    borderWidth:0,
  },
  overlayer:{
    width:'100%',
    flex:0,
  }
}

Object.assign(coreStyleData.overlayer,libStyle.absLayerTopLeft)

export default coreStyleData;
