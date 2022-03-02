import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

new TypeIt("#inner-demo-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: true
})
  .pause(2000)
  .type("Hrishikesh Rajesh Terdalkar")
  .pause(750)
  .delete(8, { deleteSpeed: 130 })
  .move(-1)
  .delete(6, { deleteSpeed: 130 })
  .move(-1)
  .delete(1, { deleteSpeed: 130 })
  .move(-10)
  .pause(750)
  .type("https://")
  .move(1)
  .delete(1)
  .type("h")
  .move(10)
  .delete(1)
  .type("r")
  .move(1)
  .delete(1)
  .type("t")
  .type(".github.io/")
  .pause(1000)
  .delete(31, { deleteSpeed: 100 })
  .pause(1500)
  .go();
