<template>
    <router-link :to="link">{{title}}</router-link>
</template>

<script>
    export default {
        name : "ButtonComp",
        props: {
            title: {
                type: String,
                default: "Connectez-vous"
            },
            link: {
                type: String,
                default: "/"
            }
        }
    }
</script>

<style lang="scss" scoped>
    a {
        background-color: #23873F;
        color: white;
        text-decoration: none;
        font-weight: bold;
        border-radius: 10px;
        padding: 15px 0px;
        text-align: center;
        font-size: 14px;
        margin-top: 24px;
    }
    .outline {
        background-color: #202124;
        border: 2px solid #23873F;
    }
</style>