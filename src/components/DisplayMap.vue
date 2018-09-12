<template><div id="display-map-container">
    
       </div>
</template>

<script>
import tsnyMap from "../tsneMap.js";

export default {
  name: "DisplayMap",
  mounted(){
    tsnyMap();
  }
};
</script>

<style>
</style>
