<template>
     <div id="mainCon" >
       <modals-container />
      <leftTop></leftTop>
      <pageButton></pageButton>
    </div>
</template>

<script>
import leftTop from "./control/leftTop.vue";
import pageButton from "./control/pageButton.vue";
import controlModal from './list/controlModal.vue'
var nowDegree=0;
var pageNum=0;
export default {
  components: {
    leftTop,
    pageButton
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    otherConnect: function(data) {
      console.log(data);
    }, 
    pageNumRe: function(data) {
      pageNum=data;
      
    }
  },
  methods: {
  
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
    // this.doc_del_rendar();    this.$socket.emit("pageNumYo");

  }
};
</script>

<style scoped>
#mainCon {
  height: 100%;
  background-color:black;
  
}
</style>
