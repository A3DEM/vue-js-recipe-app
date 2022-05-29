<template>
  <div id="app-home">
      <div class="content">
        <h1>Bienvenue</h1>
        <p>Nullam tincidunt tempus ipsum, eu volutpat
          nisi porta tincidunt. Maecenas odio lectus.</p>
        <ButtonComp link="/login" />
        <ButtonComp link="/signin" class="outline" title="S'inscrire"/>
      </div>
  </div>
</template>

<script>
  import ButtonComp from '@/components/ButtonComp.vue';

  export default {
    name: 'AppHome',
    components: {
      ButtonComp
    }
  }
</script>

<style lang="scss" scoped>
  #app-home {
    background: linear-gradient(0deg, #202124 10%, rgba(32,33,36,0) 100%), url(../assets/img/bg.jpg);
    background-size: cover;
    background-position: 55%;
    height: 100vh;
    padding: 0px 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .content {
      display: flex;
      flex-direction: column;
      padding-bottom: 40px;
      max-width: 345px;

      h1 {
      margin-block-start: 0em;
      margin-block-end: 0em;
      font-size: 32px;
      line-height: 1.2;
      }

      p {
        color: #828282;
        margin-block-start: 0em;
        margin-block-end: 0em;
        font-size: 13px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    #app-home {
      background: none;
      background-color: #202124;
      text-align: center;
      align-items: center;
    }
  }
</style>