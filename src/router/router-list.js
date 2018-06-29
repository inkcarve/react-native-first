import Start from '../component/start/start';
import TextCenter from '../component/page/page-text-center';
import scrollContent from '../component/page/page-scroll-content';
import deckSwiper from '../component/page/page-deck-swiper';

let RouterList = {
   start:{
   name:"start",
   component:Start,
   path:"start/home/",
   emptyHeader:false,
   hideNavBar:true
},
textCenter:{
   name:"textCenter",
   component:TextCenter,
   path:"ch/:id/:secId",
   emptyHeader:true,
   hideNavBar:false
},
scrollContent:{
   name:"scrollContent",
   component:scrollContent,
   path:"ch/:id/:secId",
   emptyHeader:true,
   hideNavBar:false
},
deckSwiper:{
   name:"deckSwiper",
   component:deckSwiper,
   path:"ch/:id/:secId",
   emptyHeader:true,
   hideNavBar:false
}
// {
//   name:"1st"
// }
}

export default RouterList;
