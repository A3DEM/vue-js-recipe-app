<template>
  <div class="temp-info">
    <StateInfo /> - Max : <TempMax /> - Min : <TempMin />
  </div>
</template>

<script>
import StateInfo from "./StateInfo.vue";
import TempMax from "./TempMax.vue";
import TempMin from "./TempMin.vue";

export default {
  name: "TempInfo",
  components: {
    StateInfo,
    TempMax,
    TempMin,
  },
};
</script>

<style lang="scss" scoped>
.temp-info {
  font-size: 22px;
}
</style>