<template>
  <div class="weather-info">
    <WeatherInfoComp
      icon="../../../assets/img/svg/wind.svg"
      title="Vent"
      info="20"
      suffixe="km/h"
    />
    <WeatherInfoComp
      icon="@/assets/img/svg/compass.svg"
      title="Direction"
      info="Nord"
    />
    <WeatherInfoComp
      icon="@/assets/img/svg/humidity.svg"
      title="Humidité"
      info="51"
      suffixe="%"
    />
  </div>
</template>

<script>
import WeatherInfoComp from "./info-component/WeatherInfoComp.vue";

export default {
  name: "WeatherInfo",
  components: {
    WeatherInfoComp,
  },
};
</script>

<style lang="scss" scoped>
.weather-info {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>