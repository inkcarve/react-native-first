import { StyleSheet } from 'react-native';
import libStyle from './lib-style';
import color from './color'

console.log(libStyle)
let coreStyleData = {
  containerCenter: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  btn:{
    paddingTop:14,
    paddingBottom:14,
    paddingRight:14,
    paddingLeft:14,
    height:"auto",
    width:"auto",
    justifyContent:'center',
  },
  btnBlock:{
    width:'100%'
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
  },
  error:{
    color:color.error
  },
  input:{
    paddingLeft:0,
    paddingRight:0,
  },
  formGroup:{
    position:'relative',
    marginBottom:14
  },
  icon:{
    color:color.text,
    alignItems:'center',
    textAlign:'center'
  },
  iconMenuLeft:{
    fontSize:20,
    color:color.text
  },
  saparator:{
    flex:0,
    backgroundColor:'#ffffff'
  }
  
  // warning:{
  //   color:color.warning
  // },
}

Object.assign(coreStyleData.overlayer,libStyle.absLayerTopLeft)

export default coreStyleData;
