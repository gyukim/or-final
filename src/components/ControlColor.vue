<template>
<transition name="fade">
     <div id="mainCon" >
         sss
       <modals-container />
      <leftTop></leftTop>
      <canvas width="600" height="300" id="canvas_picker"></canvas>

    </div>
</transition>
</template>

<script>


import leftTop from "./control/leftTop.vue";
import controlModal from './list/controlModal.vue'
var nowDegree=0;
export default {
  components: {
    leftTop
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    otherConnect: function(data) {
      console.log(data);
    }
  },
  methods: {
    changeBackground:function (degree) {
        // var elem = document.getElementById("mainCon"); 
        // elem.style.backgroundImage = `radial-gradient(ellipse at center, hsla(0,0%,0%,1) 0%,hsla(0,0%,7%,1) 44%,hsla(0,0%,35%,1) 54%,hsla(0,0%,17%,1) 64%,hsla(0,0%,7%,1) 90% )`
        },
        setIntervalback:function(){
        //  nowDegree++;console.log(nowDegree);
        },
        doc_del_rendar(){
                this.$modal.show(controlModal,{
                    hot_table : 'data',
                    modal : this.$modal },{
                        name: 'dynamic-modal',
                        width : '200px',
                        height : '300px',
                        draggable: true,
            })
}
  },
  data() {
    return {
    
    }
  },mounted(){
    // this.doc_del_rendar();
    this.changeBackground(nowDegree);
    setInterval(()=>{this.setIntervalback();this.changeBackground(nowDegree);},1);
    var canvas = document.querySelector('#canvas_picker');
    var context = canvas.getContext('2d');
    canvas.width  =5000; 
    canvas.height = 5000;
    var img = new Image();
        img.src="static/smartphones/back.png"
img.addEventListener('load', function() {
    context.drawImage(img, 0, 0);
}, false);

   document.getElementById('canvas_picker').addEventListener('click',function(event){
  var x = event.pageX -  $('#canvas_picker').offset().left;
  var y = event.pageY -$('#canvas_picker').offset().top;
  var img_data = context.getImageData(x,y , 1, 1).data;
  var R = img_data[0];
  var G = img_data[1]; 
  var B = img_data[2]; 
  var rgb = R + ',' + G + ',' + B ;
//   var hex = rgbToHex(R,G,B);
  $('#rgb input').val( rgb );
//   $('#hex input').val('#' + hex);
//   $picked.append("<span style='background:#"+hex+"'>#"+hex+"</span>");
  console.log(rgb);
});

  }
};


</script>

<style scoped>
#mainCon {
  height: 100%;
  background-color:black;
  
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
