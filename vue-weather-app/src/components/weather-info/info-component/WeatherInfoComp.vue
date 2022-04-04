<template>
  <div class="weather-info-comp">
    <div class="icon" style="background-color: ">
      <img class="blabla" src="../../../assets/img/svg/wind.svg" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="info">{{ info }} {{ suffixe }}</div>
  </div>
</template>

<script>
export default {
  name: "WeatherInfoComp",
  props: {
    icon: {
      type: String,
      default: "@/assets/img/svg/wind.svg",
    },
    title: {
      type: String,
      default: "title",
    },
    info: {
      type: String,
      default: "info",
    },
    suffixe: {
      type: String,
      default: "",
    },
  },
  data() {},
};
</script>

<style lang="scss" scoped>
.weather-info-comp {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba($color: #ffffff, $alpha: 0.25);
  border-radius: 10px;
  text-align: center;
  margin: 0px 10px;
  aspect-ratio: 1 / 1.61;
}
.icon {
  background-color: rebeccapurple;
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  max-height: 100px;

  img {
    width: 100%;
    height: auto;
  }
}

.title {
  line-height: 1.5;
  margin-top: 5px;
}

.info {
  font-weight: bold;
  font-size: 20px;
}
</style>