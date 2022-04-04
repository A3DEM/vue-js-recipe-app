<template>
  <button @click="count++" class="button">
    bouton appuyé {{ count }} fois
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: #41b883;
  border: 1px;
  padding: 10px 20px;
  font-weight: bold;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  transition: 0.3s ease-in-out;
  text-transform: uppercase;

  &:hover {
    color: white;
  }
}
</style>

<script>
export default {
  name: "Button",
  data() {
    return {
      count: 0,
    };
  },
};
</script>
