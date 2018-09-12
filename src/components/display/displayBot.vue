<template>
    <div id="display-bot">
    <div id="textDisplayContainer">
        <span v-text="imageNums"></span>
    </div>
   </div> 
</template>

<script>
let textNum = 0;
import eventBus from "../../event";
export default {
  

  data() {
    return {
      textDisplay: '0',
      subject: [
        `1`,
        `2`,
        `3`,
        `4`
      ],imageNums:1
    };
  },
  created() {

    eventBus.$on('imageNumSend', 
    this.onReceive);
  },
  methods: {
      onReceive(text) {
            this.imageNums = text;

        }
  }
};
</script>

<style>
#display-bot {
  position: absolute;
  height: auto;
  width: 100%;
  top: 200px;
  
  margin-left:40px;
  white-space: nowrap;
  
  
  mix-blend-mode: difference;
  
}
#display-bot span {
  color: white;
  font-family:number;
  font-size: 40em;
  font-weight:200;
}
</style>
