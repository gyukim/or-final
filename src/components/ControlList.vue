<template>
     <div id="contro-list-container" >
       <modals-container />
      <leftTop></leftTop>
     <div id="control-list-span-cont">
  <router-link to="/controlPage"  > <p  v-on:click="emitEvent($event)" v-for="title in titles" :id="title.num">
           {{title.title}}
         </p></router-link>
       </div>
    </div>
</template>

<script>
import leftTop from "./control/leftTop.vue";
import menuList from "./control/menuList.vue";
import controlModal from './list/controlModal.vue'
const json = require("../assets/titles.json")

var nowDegree=0;
export default {
  name:"ControlList",components: {
    leftTop,
    menuList
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
}, emitEvent: function(e) {
  var targetId=e.currentTarget.id;
  console.log(targetId)
      
      this.$socket.emit("controlAction", 'displaypage');
      this.$socket.emit("pageNum", targetId);
    }
  },
  data() {
    return {
      titles:"ssssssssssssssssssssssssssssssss"
    }
  },mounted(){
    // this.doc_del_rendar();
this.titles=json;
    this.changeBackground(nowDegree);
    setInterval(()=>{this.setIntervalback();this.changeBackground(nowDegree);},1);

  }
};
</script>

<style scoped>
#contro-list-container {
  height: 100%;
  background-color:black;
  overflow:auto;
  
}#control-list-span-cont{
  padding-left:30px;
  padding-right:60px;
}
#control-list-span-cont p{
  color:white;
  position:relative;
  word-break: keep-all;
  font-family:'Noto Sans KR', sans-serif;
  font-weight:500;
  font-size:1.5em;
}
#control-list-span-cont a{
     text-decoration: none;

}
</style>
