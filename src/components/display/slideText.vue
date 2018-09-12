
<template>
  <div id = "distort">
          <div id="secondLine" class="textWraper">
        
        <span id ="please" v-text="please[0]"></span>
        <span id="urls" v-text="url"></span> 
        <span id ="please" v-text="please[1]"></span>   
        <span id="smartPhone">Smartphone </span> 
        <span id ="please" v-text="please[2]"></span>       
        <span id ="please" v-text="nowConnectDis"></span>    
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      nowConnectDis:"",
      please: ["Enter to "," by your ", " and control the screen."],
      url: "orgd-list.kr "
    }
  },
  mounted() {
    this.secondLineAnimate();
  },methods:{
     secondLineAnimate: function() {
      var second = TweenMax.to("#secondLine", 1, {
        ease: Linear.easeNone,
        css: { left: "-130%" },
        repeat: -1
      });
      var currentDuration = second.duration();
      second.duration(18);
    }
  }
};
</script>

<style>
#distort {
  height: 85px;
  background-color: white;
}
#secondLine {
  position: relative;
  white-space: nowrap;
  left: 100%;
  height: 100px;
  overflow: visible;
  color: black;
   white-space: nowrap;
  font-size: 4em;
  text-overflow: clip;
  font-family: matter;
}
#urls {
  font-style: italic;
}

#please {
  /*filter: blur(2px);*/
}
#smartPhone {
  /* filter: blur(3px); */
  padding-right: 5px;
}
</style>
