<template>
 
      <iframe id="iframeId"  width="1920" height="1200" :src="iframeSrc" frameborder=0  ></iframe>

</template>

<script>
const json = require("../../assets/titles.json")


var pageNum=0;
export default {
    
    sockets: {
    pageNumRe: function(data) {
      pageNum=data;
      
    }
  },
 data(){
     return{
         iframeSrc:"",
        
         
     }
 } ,created(){
        
 }  
,mounted(){
     this.$socket.emit("pageNumYo");
    this.iframeSrc="http://localhost:3001/"
    this.checking();
    
    document.onreadystatechange = () => { 
    if (document.readyState == "complete") { 
    window.addEventListener('message', function(e) {
    console.log(json[pageNum]); // { hello: 'parent' }
   console.log(pageNum);
     var item = {
        "name": json[pageNum].num,
        "colors":json[pageNum].color
    };
//   console.log(item); // zerocho
         document.getElementById('iframeId').contentWindow.postMessage(item, '*');
});
    } 
  }
},methods:{
    checking:function(){

    }
}
}

</script>

<style>

</style>
