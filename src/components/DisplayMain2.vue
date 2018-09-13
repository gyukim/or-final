<template>
<transition name="fade">
<div id="dislpayBody">
      <canvas id="canvas"></canvas>
  <div v-bind:id="backimageId" class="clipping" ><div id="backImageWrapper" ><img :src="imageSrc" id="img1"  ><img :src="imageSrc2"   id="img2" ></div></div>

<!-- <displayTop></displayTop> -->
<!-- <displayBot></displayBot> -->
</div>
</transition>
</template>
  

<script>
var animateOn=true;
let xdeg=0;
let ydeg=90;
let zdeg=0;
let pers=3;

let persSpeed=0.3;
let theta={x:17};
let nowConnect=0;
var animationId;
var setId;
var reUp;
// import displayTop from "./display/displayTop.vue";
// import displayBot from "./display/displayBot.vue";
import * as TWEEN from '@tweenjs/tween.js';

import eventBus from "../event";
var imgArray = new Array();

export default {
  name: "DisplayMain", 
  
  components: {
    // displayTop: displayTop,
    // displayBot: displayBot
  },sockets: { connect: function() {
      console.log("sockdddddet connected");
      
    },
    speedRecieve: function(data) {
      this.speedControl(data);
      
     
    }},
  data() {
    return { moveSpeed:70, imageSrc: `/static/images/1_1.jpg`, imageSrc2: `/static/images/2_1.jpg`,
    backimageId:"backImage"
    ,
    imageBright:1,
   imageNum:1,imageNum2:2,imageTurn:false,imgA:{x:0,y:0},imgB:{x:300,y:0}
     };
  },
  created() {
    
  },mounted(){
    setTimeout("location.reload()",6000000);

    ydeg=90;
    for(var i=1; i<200; i++){
imgArray[i] = new Image();
imgArray[i].src=`/static/images/${i}_1.jpg`
}
    
    this.imageMove();
    this.drawBackground();
    animateOn=false;
    
  },beforeDestroy(){
   for (var i = 1; i < 99990; i++)
        window.clearInterval(i);
   cancelAnimationFrame( animationId );
  }, methods:{
    speedControl:function(e){
if(e=='down'){
      this.moveSpeed-=1;
      this.moveSpeed= Math.max(this.moveSpeed, 15);
      console.log(this.moveSpeed);
      console.log("down");
      clearTimeout(reUp);
      reUp=setTimeout(()=>{
      this.moveSpeed=70;
      console.log('reup!')
      this.$socket.emit("speedDisplay", 0);
      },2000);
    }
      this.$socket.emit("speedDisplay", 55-this.moveSpeed+15);

    },
    drawBackground:function(){
      var glShader = require('gl-shader');
      var Geometry = require('gl-geometry');
      const glslify = require('glslify')
      var canvas = document.getElementById('canvas');
      canvas.width = 1920;
      canvas.height = 1200;
      var gl = canvas.getContext('webgl');
      var quad = Geometry(gl)
          .attr('aPosition', [
              -1, -1, -1,
              1, -1, -1,
              1,  1, -1,
              -1, -1, -1,
              1,  1, -1,
              -1,  1, -1
          ]);
      const fragment = require('../shader/frag.frag')
      const vertex  = require('../shader/vert.vert')
      var program = glShader(gl,vertex, fragment);

      function render() {
        // theta.x+=0.01;
       if (animateOn){
        program.bind();
        quad.bind(program);
            program.uniforms.uSunPos = [0, Math.cos(theta.x) * 0.3 + 0.2, -1];

        quad.draw();
        
        animationId=requestAnimationFrame(render);
       console.log('animate')
        }
      }
        

      render();
       
    },
    imageChange:function(){
      
      if(this.imageTurn==false){
        if(this.imageNum2+1<199){
            this.imageNum=this.imageNum2+1;
            
        }else{
          this.imageNum=1;
        }
        this.imageSrc = imgArray[this.imageNum].src;
        this.imageTurn=true;
        }else{ 
           if(this.imageNum+1<199){
            this.imageNum2=this.imageNum+1;
  
        }else{
          this.imageNum2=2;
        }
        this.imageSrc2 = imgArray[this.imageNum2].src;
        this.imageTurn=false;
        }
    },
     imageMove: function() {
      var plane=document.getElementById('img1');
        var plane2=document.getElementById('img2');
      setId=setInterval(() => {
         
        this.imgA.x-=this.moveSpeed;
        this.imgB.x-=this.moveSpeed;
        if( this.imgA.x<-300){
        this.imageChange();
        this.imgA.x=300;
        }else if (this.imgB.x<-300){
          this.imageChange();
        this.imgB.x=300;
        }
        //  plane.style.transform=` perspective(${pers}px) rotateX(${xdeg}deg) rotateY(${ydeg}deg) rotateZ(0deg)`;
        plane.style.transform=`translateX(${this.imgA.x}%)`
         plane2.style.transform=`translateX(${this.imgB.x}%)`
       },10)
    },
   
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas{
  position:absolute;
  top:0;
  
}
#backImage {
  

  
  clip-path: polygon;
    /* mix-blend-mode: difference; */
 width: 100%;
  height: 100%;
   position:fixed;
    display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center; 
   /* mix-blend-mode: difference; */

}
#backImageWrapper{
 width:500px;
 height:500px;
   overflow:hidden;
  /* box-shadow: 0px 0px 50px #888888; */
  }
#backImage img{
width: 500px;
  height: 500px;
position:fixed;
}
#backImage img2{
width: 500px;
  height: 500px;
position:fixed;
}
#displayBody{
  overflow:hidden;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
