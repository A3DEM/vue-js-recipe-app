<template>
  <nav :class="{ 'menu-active': opened }">
    <ul>
      <li>Strasbourg</li>
      <li>Mulhouse</li>
      <li>Marseille</li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#20233A"
          stroke-width="3"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  transform: translateX(101%);

  ul {
    padding-inline-start: 0px;
    list-style-type: none;
    margin: auto;
    text-align: center;
    li {
      font-weight: bold;
      color: #20233a;
      font-size: 24px;
      align-self: center;
      justify-self: center;
      margin: 40px 0px;
    }
  }
}
.menu-active {
  transform: translateX(0);
}
</style>