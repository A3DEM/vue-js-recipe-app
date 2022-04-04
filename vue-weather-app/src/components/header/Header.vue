<template>
  <header>
    <span>Météo</span>
    <MenuSvg />
    <Menu />
  </header>
</template>

<script>
import Menu from "./menu/Menu.vue";
import MenuSvg from "./menu/MenuSvg.vue";

export default {
  name: "Header",
  components: {
    Menu,
    MenuSvg,
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 20px;

  span {
    font-size: 30px;
    font-weight: bold;
    color: white;
  }
}
</style>