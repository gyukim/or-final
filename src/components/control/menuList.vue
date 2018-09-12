<template>
    <div id = "menu">
      <div id="list-please-container">
      <p id="list-please">
Concurrent Users {{connectNum}}
</p>
      </div>
      <div id="button-container" >
<div id="button-first">
   <!-- <img  v-on:click="emitEvent('up')" src = "../../assets/svg/right.svg"> -->
   <p v-on:click="emitEvent('up')" >
 +
 </p>
</div>
<div id="button-second">
  <p v-on:click="emitEvent('down')">
  -
  </p>
 <!-- <img v-on:click="emitEvent('down')" src = "../../assets/svg/right.svg"> -->
</div>
      </div>
    </div>
</template>

<script>

import * as TWEEN from '@tweenjs/tween.js';
export default {
  sockets: {
   connectCountDeliv:function(data){
      console.log(data)
      this.connectNum=data-1;
    
  },colorChangeAct:function(data){
  // this.gradientNum=data;
  // this.colorChangeAnimation(this.gradientNum);

  }
  },
  data(){
    return{
      gradientNum:0
    }
  },
methods:{
    listpleaseAnimation:function(){
                     var second= TweenMax.to("#list-please", 1, {ease: Linear.easeNone,css:{left:"-400%"}, repeat: -1 });
                      var currentDuration = second.duration();
                      second.duration(15); 
                  
    },  emitEvent: function(data) {
      this.$socket.emit("speedControl", data);
      console.log("clicked");
    }, colorChangeAnimation:function(e){
  
TweenMax.to("#button-container", 1, {backgroundImage:`linear-gradient(to top,${nowColor[0]},${nowColor[1]},${nowColor[2]})`, repeat:0});
    }
  },mounted(){
  // this.listpleaseAnimation();

  },data(){
    return {
      connectNum:0
    }
  }
}
</script>

<style scoped>
#menu {
  display: flex;
  flex-direction: column;
  height:92%;

}
a {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
#list-please-container{
background-color:black;
height:auto;

}
#list-please{
color:white;

  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
 position: relative;
  white-space: nowrap;
  left:100%;
  overflow:visible;
  margin:5px;
  text-transform: uppercase;
  
}
#list-link{
  color:black;

  
}
#button-first{

height:40%;
position:relative;
  width:100%;
  margin-top:20%;
  text-align: center;

}
#button-first img{
width:50%;
}
#button-second{
display:block;
position:relative;
  width:100%;
    text-align: center;

}
#button-second img{
width:50%;
filter: drop-shadow(0px 0px 8px #4444dd);
}
#button-container p{
  filter: drop-shadow(0px 0px 8px #4444dd);
  font-size:10em;
}
#connectCap{
  font-size:0.5em;
  text-align :center;
}
#button-container{
position:relative;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
    -webkit-flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center; 
     height:100%;
    background-image: linear-gradient(to top, #000, #fff, #000, #fff, #000);


}
</style>
