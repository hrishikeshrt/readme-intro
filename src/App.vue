<template>
  <div id="app">
    <ReadmeIntro/>
  </div>
</template>

<script>
import ReadmeIntro from "./components/ReadmeIntro";

export default {
  name: "App",
  components: {
    ReadmeIntro
  }
};
</script>

 <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
</style>
<style>
#app {
  font-family: "Roboto Mono", fixed-width;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
