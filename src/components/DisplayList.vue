<template>
<div id="display-list-container">
  <div id="display-list-top">
       <slideText></slideText>
       </div>
       <div id="display-list-bot">
         <div id="display-list-span-cont">
         <span v-for="title in titles">
           {{title.title}}
         </span>
         </div>
         </div>
       </div>
</template>

<script>
import slideText from "./display/slideText.vue";
const json = require("../assets/titles.json")
export default {  
  components: {
    slideText:slideText
  },sockets: {
    connect: function() {
      console.log("sockdddddet connected");
     
    },
    displayControl: function(data) {
      console.log(data);
      this.routerChange(data);
    },connectCountDeliv:function(data){

    }
  },
  data(){
return {
  titles:"ssssssssssssssssssssssssssssssss"
}
  },
  mounted(){
     for (var i = 1; i < 99990; i++)
        window.clearInterval(i);

  
    this.titles=json;
    this.displayListAnimation();
  },methods:{
    routerChange: function(data) {
      this.$router.push(data);
    },
     displayListAnimation: function() {
      var displayListAnimation = TweenMax.to("#display-list-span-cont", 1, {
        ease: Linear.easeNone,
        css: { top: "-200%" },
        repeat: -1
      });
      var currentDuration = displayListAnimation.duration();
      displayListAnimation.duration(50);
    }
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
