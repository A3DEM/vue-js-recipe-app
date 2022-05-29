<template>
    <div class="setting-comp">
        <img :src="require('@/assets/icon/'+type+'.svg')">
        <p>{{title}}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4C4C4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
    </div>
</template>

<script>
    export default {
        name: "SettingComp",
        props: {
            title: {
                type: String,
                default: "Zeha"
            },
            type: {
                type: String,
                default: "data"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .setting-comp {
        background-color: #292A2D;
        border-radius: 10px;
        padding: 14px 20px;
        margin: 12px 0px;
        display: flex;
        align-items: center;
        position: relative;

        p {
            margin: 0;
            margin-left: 16px;
            font-size: 14px;
        }

        svg {
            position: absolute;
            right: 20px;
        }
    }
</style>