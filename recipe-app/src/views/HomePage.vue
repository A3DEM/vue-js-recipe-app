<template>
    <div id="home">
        <MenuComp/>
        <h1>Bienvenue</h1>
        <p>Quel plat allez-vous cuisiner aujourd'hui ?</p>
        <h2>Les recettes du moments</h2>
    </div>
</template>

<script>

import MenuComp from '@/components/MenuComp.vue';

    export default {
        name: "HomePage",
        components: {
            MenuComp,
        },
    }
</script>

<style lang="scss" scoped>
#home {
    background-color: #202124;
    color: white;
    padding-top: 40px;
}
</style>