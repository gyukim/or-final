<template>
    <div id = "menu">
      <div id="list-please-container">
      <p id="list-please">
Please touch square</p>
      </div>
      <div id="button-container">
<div id="button-first" v-on:click=" startEvent()">
   <div v-bind:id="backimageId"  class="clipping" ><div id="backImageWrapper" ><img :src="imageSrc"   ></div></div>
</div>
<div id="button-page-third">
        <router-link to="/"><p id="list-link" v-on:click="emitEvent('displaymain')">Exit</p></router-link>
</div>
      </div>
    </div>
</template>

<script>
let xdeg=0;
let ydeg=90;
const jsons = require("../../assets/titles.json")
export default {sockets: {
  startPageReceive:function(data){
console.log(data);
console.log(this.pngNum.indexOf(data));
  if(this.pngNum.indexOf(data)==-1){
        this.imageSrc = `/static/images/${data}_1.jpg`;
        }else{
         this.imageSrc = `/static/images/${data}_1.png`;
        }
  }
},
methods:{
    listpleaseAnimation:function(){
                     var second= TweenMax.to("#list-please", 1, {ease: Linear.easeNone,css:{left:"-150%"}, repeat: -1 });
                      var currentDuration = second.duration();
                      second.duration(12); 
    },  emitEvent: function(data) {
      this.$socket.emit("controlAction", data);
      window.location.reload(true);
    console.log("clicked");

    },startEvent:function(){
       this.$socket.emit("startPage");

    },rotateImage:function(){
      setInterval(() => {
         xdeg+=0.01;
         ydeg+=180/100/3*3;
         var plane=document.getElementById('backImage');
         plane.style.transform=` perspective(500px) rotateX(0deg) rotateY(${ydeg}deg)`;
       },30)
    }
  },mounted(){
  this.listpleaseAnimation();
      this.rotateImage();

  },data(){
    return{imageSrc: ``, backimageId:"backImage",
    imageNum:1,pngNum:['12', '13', '16', '38', '39', '43','46', '64', '66', '68', '69', '74', '75', '76', '77', '78', '82', '85', '97', '98', '130', '131', '142', '144', '145', '146', '148', '149', '153', '154', '157', '158', '159', '160', '162', '165', '179', '208', '209', '210', '211', '212']
    }
  },beforeDestroy(){
   for (var i = 1; i < 99990; i++)
      window.clearInterval(i);
  }
};
</script>ß

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
  font-weight: 700;
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
  font-size: 2.5em;
  font-weight: 700;
}
#button-first{

  margin: 0 auto;
  top:50%;
  left:50%;
  max-height:350px;
  max-width:350px;
  box-shadow:0 0 100px 50px rgba(255,255,255,.8)!important;
  
  background-color:rgba(255,255,255,1);
  margin-bottom:20%;
}
#backImage {
  
  transform-style:preserve-3d;
 
  clip-path: polygon;
  background-color: black;
    /* mix-blend-mode: difference; */


}
#backImage img{
  width: 100%;
}
#backImageWrapper{
 width: 200px;
  height: 200px;
   overflow:hidden;
  box-shadow: 0px 0px 50px #888888;}
#button-second{
  margin: 0 auto;
  top:50%;
  left:50%;
  max-height:350px;
  max-width:350px;
  box-shadow:0 0 100px 50px rgba(255,255,255,.8)!important;

  border-radius:50%;
  background-color:rgba(255,255,255,1)
}
#button-container{
   display: flex;
  flex-direction: column;
   justify-content: center;
     align-items: center; 
     height:100%;
       box-shadow:inset 0 -10px 200px 180px rgba(255,255,255,0.4)
}
#button-page-third p{
    position: relative;
    top:30px;
}
#button-page-third p{
    font-family:number;
    color:white;
   padding: 3px 20px 3px 20px;

    border:2px solid white;
    box-shadow: 0px 0px 8px white;
}
</style>
