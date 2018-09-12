<template>
<div id="display-page-container">
  <div id="display-page-top">
      <iframe id="iframeId"  width="1920" height="1200" :src="iframeSrc" frameborder=0  ></iframe>
       </div>
       </div>
</template>

<script>
var pageNum=0;
import slideText from "./display/slideText.vue";
const json = require("../assets/titles.json")
export default {  
  components: {
    slideText:slideText
  },methods:{routerChange: function(data) {
      this.$router.push(data);
    },sendsend:function(){
 this.$socket.emit("pageNumYo");
    },rendering:function(){
this.iframeSrc="http://localhost:3001/"
var nowColor=[];
var nowNum;
for (var i = 0; i < json.length; i++){
  // look for the entry with a matching `code` value
if (json[i].num == pageNum){
    nowColor=json[i].color;
    nowNum=json[i].num;
  }
}
console.log(nowColor);

// console.log(pageNum);
// console.log(nowColor);
     var item = {
        "name": 1,
        "colors":nowColor
    };
    if (document.readyState == "complete") { 
    window.addEventListener('message', function(e) {
//   console.log(item); // zerocho
         document.getElementById('iframeId').contentWindow.postMessage(item, '*');
});
    } 
  

    }
  }
  ,sockets: {
    connect: function() {
      console.log("sockdddddet connected");
    },
    displayControl: function(data) {
      console.log(data);
      window.location.reload(true);
      this.routerChange(data);
    },connectCountDeliv:function(data){

    },pageNumRe: function(data) {
      pageNum=data;
      
    },startPageReceive: function(data) {
      pageNum=data;
      this.rendering();
    }
  },
  data(){
return {
  iframeSrc:""
}
  },created(){
     for (var i = 1; i < 99990; i++)
        window.clearInterval(i);
         
  },
  mounted(){      
  },updated(){
    
  }
};
</script>

<style>
#display-list-top{
 color: white;
  z-index: 100;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  position: relative;
 
}

 #display-list-bot{padding-left:80px;
 padding-right:80px;
 height:1115px;
 overflow:hiden;
 position:relative;
 }
#display-list-span-cont{
position:relative;
 }
#display-list-bot span{
   position:relative;
  word-break: keep-all;
  font-family:'Noto Sans KR', sans-serif;
  font-weight:900;
  color:black;
  font-size:3em;
    
}
</style>
