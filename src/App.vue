<!-- HTML -->

<template>
  <div id="app">
    <nav>
      <img src="../public/logo.png">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<!-- JavaScript -->

<script>
export default {
  name: "App",
  metaInfo: {
    title: "",
    titleTemplate: "%s • Kermit's Meme Truck",
    htmlAttrs: {
      lang: "en"
    },
    meta: [{ charset: "utf-8" }]
  }
};
</script>

<!-- CSS -->

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
:root {
  /* The width and height of the logo image. Don't put "px" */
  --logoImageHeight: 225;
  --logoImageWidth: 1820;
  
  /* Don't touch */
  --logoHeight: 50;
  --logoWidth: calc((var(--logoImageWidth)/2)/(var(--logoImageHeight)/50));
  --logoSpacing: 1;
}
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Roboto", sans-serif;
}
nav {
  height: 80px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 49;
}
nav img {
  height: var(--logoHeight);
  width: var(--logoWidth);
  z-index: 50;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-filter: drop-shadow(0px 0px 3px #222222);
  filter: drop-shadow(0px 0px 3px #222222);
}
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
nav li:first-child {
  padding-left: calc(var(--logoWidth)+1);
}
nav li {
  float: left;
}
nav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
nav li a:hover {
  background-color: #111;
}
.active {
  background-color: #4CAF50;
  color: white;
}
ul.list {
  list-style-type: none;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 100%;
  align-content: center;
  text-align: center;
}
ul.list li {
  display: inline;
}
ul.list li img {
  height: 30px;
  margin: 0px 2.5px;
  padding: 0px 2.5px;
}
.title {
  font-size: 2.5em;
  display: block;
}
.title img {
  height: 2.5em;
}
.home div {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  align-content: center;
  text-align: center;
}
ul.list .title {
  padding: 5px 0px;
  margin: 5px 0px;
}
.shadow {
  -webkit-filter: drop-shadow(0px 0px 3px #222222);
  filter: drop-shadow(0px 0px 3px #222222);
}
</style>
