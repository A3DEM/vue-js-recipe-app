<template>
  <div id="app">
    <Header />
    <Weather />
    <WeatherInfo />
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Weather from "./components/weather/Weather.vue";
import WeatherInfo from "./components/weather-info/WeatherInfo.vue";
//import Button from "./components/Button.vue";

export default {
  name: "App",
  components: {
    Header,
    Weather,
    WeatherInfo,
  },
  methods: {
    colorReveal(color) {
      console.log(color);
      this.toggle = true;
      this.newColor = color;
    },
  },
  data() {
    return {
      toggle: false,
      newColor: "",
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #20233a;
  color: white;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
