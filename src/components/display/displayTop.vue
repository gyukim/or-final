<template>
<div id="display-top">
 
  
<slideText> </slideText>
    
       <div id="firstLine" class="textWraper">
        <span v-text="subject"></span>
    </div>
    </div>  
</template>

<script>
import slideText from "./slideText.vue";

export default {
    components: {
    slideText:slideText
  },
  data() {
    return {
      subject: "List of Graphic Design Student Works Viewer"
    };
  },
  methods: {
   
  }
};
</script>

<style>
#display-top {
  color: white;
  z-index: 100;
  width: 100%;
  overflow: hidden;
  z-index: 10;
  position: relative;
}
.textWraper {
  overflow: hidden;
}
#display-top span {
  white-space: nowrap;

  text-overflow: clip;
  font-family: matter;
}
#firstLine {
    font-size: 4em;
  width: 100%;
  height: 102px;
  font-style: bold;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 3.5px;
  margin-left: 20px;
  color: white;
}
#firstLine span {
  /* filter: blur(5px);  */
}

</style>
