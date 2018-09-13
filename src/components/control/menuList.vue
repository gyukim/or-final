<template>
    <div id = "menu">
      
      <div id="button-container" >
<div  id="button-second">
  <p v-on:click="emitEvent('down')">
  BUTTON
  </p>
 <!-- <img v-on:click="emitEvent('down')" src = "../../assets/svg/right.svg"> -->
</div>
      </div>
      <div id="list-please-container">
      <p id="list-please">
Concurrent Users {{connectNum}}
</p>
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

  },speedDisplayReceive:function(data){
      this.buttonHeight=data*80/55;
      document.querySelector('#button-container').style.top= this.buttonHeight+'%';
  }
  },
  data(){
    return{
      gradientNum:0,
      connectNum:1 ,
      buttonHeight:0
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
      console.log(this.buttonHeight);
    }
  },mounted(){
  // this.listpleaseAnimation();
 this.emitEvent();

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
  height:100%;

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
  margin-right:5vw;
  text-align:right;
}
#list-link{
  color:black;

  
}

#button-container p{
  font-size:23.5vw;
  margin:0;
  font-family:matter,Arial, Helvetica, sans-serif;
  font-weight:700;
}

#button-container{
position:relative;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
    -webkit-flex-direction: column;
 
  -webkit-align-items: center;
  align-items: center; 
     height:93%;


}
</style>
