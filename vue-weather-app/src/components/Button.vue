<template>
  <div class="container">
    <button @click="colorReturn" class="button">
      {{ nom }}
    </button>
    <!-- <div v-if="count == 10">bvvv</div> -->
  </div>
  <!-- <button @click="count++" class="button">{{ nom }} : {{ countProps }}</button> -->
</template>

<style lang="scss" scoped>
.button {
  background-color: #41b883;
  border: 1px;
  padding: 10px 20px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: #2c3e50;
  transition: 0.3s ease-in-out;
  text-transform: uppercase;

  &:hover {
    color: white;
    background-color: #388864;
  }
}
</style>

<script>
export default {
  name: "Button",
  props: {
    nom: {
      type: String,
      default: "Button",
    },
    countProps: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "#388864",
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment(n) {
      this.count += n;
      this.$emit("count", this.count);
    },
    colorReturn() {
      this.$emit("getcolor", this.color);
    },
  },
};
</script>
