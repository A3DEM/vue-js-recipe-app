<template>    
    <router-link :to="{ path: '/recipe/'+reciepe.id }">
        <div class="highlighted-recipe" :style="'background: linear-gradient(0deg, rgba(32,33,36,1) 0%, rgba(32,33,36,0) 100%), center / cover url('+reciepe.attributes.Image.data.attributes.url+');'">
            <h3>{{reciepe.attributes.Name}}</h3>
            <p>{{reciepe.attributes.Ingredients.length}} Ingrédients | {{reciepe.attributes.Duration / 60}} min.</p>
            <p class="energy">{{reciepe.attributes.Energy}} kcal</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        name:"HighlightedRecipe",
        props: {
            reciepe: {
                type: Object,
                required : true
            }
        }
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
    .highlighted-recipe {
        border-radius: 10px;
        height: 230px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0px 20px 20px 20px;
        margin-bottom: 30px;

        h3 {
            margin: 0;
            font-size: 24px;
            color: #c4c4c4;
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