<template>
  <div id="app">
    <router-view/>
   
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

@font-face {
  font-family: matter;
  font-weight: 500;
  src: url("./assets/BasisGrotesqueProMedium.otf");
}
@font-face {
  font-family: matter;
  font-weight: 700;
  src: url("./assets/BasisGrotesqueProBold.otf");
}
body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
  overflow:hidden;
}
#app {
  font-family: matter, A1, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  height: 100%;
}
#container {
  height: 100%;
}
</style>