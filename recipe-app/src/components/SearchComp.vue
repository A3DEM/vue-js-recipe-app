<template>
    <div class="search-comp">
        <p>{{title}}</p>
        <img :src="type == 'trend' ? require('@/assets/icon/trend.svg') : require('@/assets/icon/cross.svg')" :alt="type == 'trend' ? 'Recherches populaires' : 'Dernière recherche'">
    </div>
</template>

<script>
    export default {
        name: "SearchComp",
        props: {
            title: {
                type: String,
                default: "Zeha"
            },
            type: {
                type: String,
                default: "last"
            }
        }
    }
</script>

<style lang="scss" scoped>
.search-comp {
    background-color: #292A2D;
    border-radius: 10px;
    padding: 14px 20px;
    margin: 12px 0px;
    display: flex;
    align-items: center;
    position: relative;

    p {
        margin: 0;
        font-size: 14px;
    }

    img {
        position: absolute;
        right: 20px;
    }
}
</style>