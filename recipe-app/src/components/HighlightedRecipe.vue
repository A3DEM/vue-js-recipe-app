<template>
    <div class="highlighted-recipe">
        <h3>Salade César</h3>
        <p>12 Ingrédients | 5 min. | Facile</p>
        <p class="energy">752 kcal</p>
    </div>
</template>

<script>
    export default {
        name:"HighlightedRecipe"
    }
</script>

<style lang="scss" scoped>
    .highlighted-recipe {
        background: linear-gradient(0deg, rgba(32,33,36,1) 0%, rgba(32,33,36,0) 100%), url("../assets/img/fond.jpg"),;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        height: 230px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0px 0px 20px 20px;
        margin-bottom: 30px;

        h3 {
            margin: 0;
            font-size: 24px;
        }
        p {
            margin: 0;
            font-size: 12px;
            color: #828282;
        }
        .energy {
            font-size: 16px;
            font-weight: bold;
            color: #c4c4c4;
        }
    }

    @media screen and (min-width:375px) {
        .highlighted-recipe {

            .energy {
                position: absolute;
                right: 20px;
                bottom: 18px;
            }
        }
    }

    @media screen and (min-width:845px) {
        .highlighted-recipe {

            margin-bottom: 0;
        }
    }
</style>