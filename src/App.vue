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
  font-family: monument;
  src: url("./assets/monument-grotesk-regular.otf");
}
@font-face {
  font-family: A1;
  src: url("./assets/GothicA1-Regular.ttf");
}
@font-face {
  font-family: Soyuz;
  src: url("./assets/SoyuzGroteskBold.woff");
}
@font-face {
    font-family: varfont;
    src: url("./assets/UKRGX.ttf") format("truetype-variations");
         font-weight: normal;
         font-style: normal;
}
@font-face {
  font-family: number;
  src: url("./assets/3.woff");
}@font-face {
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