<template>
<transition name="fade">
<div id="dislpayBody">
      <canvas id="canvas"></canvas>
  <div v-bind:id="backimageId" @click="changeImage()" v-bind:style="{ fiter: 'brightness(1)' }" class="clipping" ><div id="backImageWrapper" ><img :src="imageSrc"   ></div></div>
<displayTop></displayTop>
<displayBot></displayBot>
</div>
</transition>
</template>
  

<script>

let xdeg=0;
let ydeg=90;
let theta={x:16.4};
let nowConnect=0;
var animationId;
import displayTop from "./display/displayTop.vue";
import displayBot from "./display/displayBot.vue";
import * as TWEEN from '@tweenjs/tween.js';

import eventBus from "../event";
var pngNum=[12, 13, 16, 38, 39, 43, 46, 64, 66, 68, 69, 74, 75, 76, 77, 78, 82, 85, 97, 98, 130, 131, 142, 144, 145, 146, 148, 149, 153, 154, 157, 158, 159, 160, 162, 165, 179, 208, 209, 210, 211, 212];
var noNum=[20, 28, 50, 51, 52, 60, 65, 67, 72, 79, 80, 90, 95, 99, 100, 137, 138, 139, 151, 172, 175, 176, 178, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 207];
export default {
  name: "DisplayMain",
  components: {
    displayTop: displayTop,
    displayBot: displayBot
  },
  data() {
    return { imageSrc: `/static/images/1_1.jpg`,
    backimageId:"backImage"
    ,
    imageBright:1,
   imageNum:1 };
  },
  sockets: {
    connect: function() {
      console.log("sockdddddet connected");
     
    },
    displayControl: function(data) {
      console.log(data);
      this.routerChange('data');
    },connectCountDeliv:function(data){
      console.log(data)
      nowConnect=data;
       if(nowConnect>1){
      this.thetaUp(20.2);
    }else{
      this.thetaUp(16.4);
    }
    }
  },
  created() {
    
  },mounted(){
    ydeg=90;
    
    this.changeImage();
    this.drawBackground();
    if(nowConnect>1){
      this.thetaUp(17);
      
    }
  },beforeDestroy(){
   for (var i = 1; i < 99990; i++)
        window.clearInterval(i);
   cancelAnimationFrame( animationId );
  }, methods:{
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
        
       
        program.bind();
        quad.bind(program);
            program.uniforms.uSunPos = [0, Math.cos(theta.x) * 0.3 + 0.2, -1];

        quad.draw();
        animationId=requestAnimationFrame(render);

      }
      render();
    }, changeImage: function() {
      setTimeout("location.reload()",6000000);
      setInterval(() => {
                this.$socket.emit('colorChange', this.imageNum);

       eventBus.$emit('imageNumSend', this.imageNum);

        if(this.imageNum<212){
            this.imageNum++;
          if(noNum.indexOf(this.imageNum)!=-1){
            this.imageNum++;
          }
        }else{
          this.imageNum=1;
        }

         if(pngNum.indexOf(this.imageNum)==-1){
        this.imageSrc = `/static/images/${this.imageNum}_1.jpg`;
        }else{
         this.imageSrc = `/static/images/${this.imageNum}_1.png`;
        }
          eventBus.$emit('imageNumSend', this.imageNum);
      }, 3000);
       setInterval(() => {
         xdeg+=0.01;
         ydeg+=180/100/3*3;
         var plane=document.getElementById('backImage');
         plane.style.transform=` perspective(250px) rotateX(0deg) rotateY(${ydeg}deg)`;
       },30)
    },
    routerChange: function(data) {
      this.$router.push(data);
    },
      thetaUp: function(heightSun){
        let frameHandler;
        const animate = function (currentTime) {
        TWEEN.update(currentTime)
        frameHandler = requestAnimationFrame(animate)
      }
        var tween = new TWEEN.Tween(theta)
         	.to({x:heightSun}, 15000)
          .onComplete(() => {
        // Make sure to clean up after ourselves.
        cancelAnimationFrame(frameHandler)
      }) .start()
// var tween2 = new TWEEN.Tween(imageBright)
//          	.to({b:1}, 1000)
//           .onComplete(() => {
//         // Make sure to clean up after ourselves.
//         cancelAnimationFrame(frameHandler)
//       }) .start()
   
      console.log(theta.x);
        frameHandler = requestAnimationFrame(animate)

    
    }
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
  
  position: fixed;
  transform-style:preserve-3d;
  left:800px;
  top: 400px;
  clip-path: polygon;
  background-color: black;
    /* mix-blend-mode: difference; */

 
}
#backImageWrapper{
 width: 500px;
  height: 500px;
   overflow:hidden;
  box-shadow: 0px 0px 50px #888888;}
#backImage img{
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
