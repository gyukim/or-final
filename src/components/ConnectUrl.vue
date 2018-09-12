<template>
     <div id="url-container" >
         <div id="text-container">
         <p v-text="displayText"> </p>
         </div>
         <div id="phone-container" v-if="imageShow" ><img :src="imageSrc" id='phone-img'   ></div>
    </div>
</template>

<script>

export default {
  components: {
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    otherConnect: function(data) {
      console.log(data);
    },
    displayControl: function(data) {
      console.log(data);
      this.routerChange('displayselect');
    }
  },
  methods: {
        textChange:function(){
        this.intervalid1 = setInterval(()=>{
        this.textNum ++;
        if(this.textNum>this.texts.length)
        this.textNum=0;
        this.displayText=this.texts[this.textNum];
       this.phoneChange();
    }, 1500);
        },phoneChange:function(){
    if(this.displayText=='Smartphone'){
        this.imageSrc=`static/smartphones/${this.phoneNum}.jpg`
        this.phoneNum++;
        if(this.phoneNum>7){
            this.phoneNum=1;
        }
            this.imageShow=true;
            }else{
            this.imageShow=false;
            }
            }
    },
    data() {
        return {
            texts:['Enter to','orgd-list.kr','by your','Smartphone','and control','the screen'],
            displayText:'',
            textNum:0,
            intervalid1:'',
            imageSrc:'static/smartphones/1.jpg'
            ,imageShow:false,
            phoneNum:1
        }
    },mounted(){
        this.displayText=this.texts[0];
    this.textChange();
    }
};
</script>

<style scoped>
#url-container {
  height: 100%;
  width:100%;
  background-color:white;
  font-size:20em;
}
#text-container{
    position:absolute;
    z-index:100;
}
#url-container p {
    margin:0;
    padding:0;
    margin-left:1%;
}
#phone-container{
  display: flex;
  align-items: center;
  height:100%;
  justify-content: center;
}
#phone-container img{
    max-height:500px;
    min-height:400px;

}
</style>
