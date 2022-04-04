<template>
  <div class="weather">
    <Date />
    <City />
    <StateImage />
    <Temperature />
    <TempInfo />
  </div>
</template>

<script>
import Date from "./info/Date.vue";
import City from "./info/City.vue";
import StateImage from "./info/StateImage.vue";
import Temperature from "./info/Temperature.vue";
import TempInfo from "./info/temperature-info/TempInfo.vue";

export default {
  name: "Wheater",
  components: {
    Date,
    City,
    StateImage,
    Temperature,
    TempInfo,
  },
};
</script>

<style lang="scss" scoped>
.weather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>