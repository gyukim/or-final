<template>
<div id="leftTopContainer">
<div id="leftTop">
        <h1 v-text="listText"></h1>
    </div>
    <div id="leftTopDummy">
      
    </div>
    </div>

</template>

<script>
export default {
  data() {
    return { listText: "List of Graphic Design Student Works - Controller" };
  }
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 0.8em;
  padding: 0;
  margin: 0;
}
a {
  vertical-align: middle;
}
p {
}
#leftTop {
  width: 90%;
  height: 8%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  position:fixed;
  background-color: white;
  border-bottom:solid 1px;
   z-index:999;
}
#leftTopContainer{
  line-height:100px;
  width: 90%;
  height: 8%;
  display: flex;
  z-index:999;
}

#filterLink {
  margin-left: auto;
}
</style>