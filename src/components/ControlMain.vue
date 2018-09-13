<template>
<transition name="fade">
     <div id="mainCon" >
       <modals-container />
      <menuList></menuList>
    </div>
</transition>
</template>

<script>
import leftTop from "./control/leftTop.vue";
import menuList from "./control/menuList.vue";
import controlModal from './list/controlModal.vue'
var nowDegree=0;
export default {
  components: {
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
}
  },
  data() {
    return {
    
    }
  },mounted(){
    // this.doc_del_rendar();

  }
};
</script>

<style scoped>
#mainCon {
  height: 100%;
  background-color:linear-gradient( 90deg, white, black );
  
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
