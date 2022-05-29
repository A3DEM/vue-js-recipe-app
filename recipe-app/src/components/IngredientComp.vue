<template>
    <div class="ingredient">
        <!-- S'il y avait une liste d'ingrédients définies, on aurait pu récupérer une image selon l'ingrédient -->
        <!-- <img src="@/assets/img/ingredients/farine.png" width="40" height="40" alt="Ingrédient 1"> -->
        <p class="ingredient-title">{{title}}</p>
        <div class="ingredient-quantity">
            <p class="ingredient-quantity-amount">{{amount}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name : "IngredientComp",
        props: {
            title: {
                type: String,
                required : true
            },
            amount: {
                type: [String, Number],
                required : true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ingredient {
        display: flex;
        align-items: center;
        background-color: #292A2D;
        padding: 8px 20px;
        border-radius: 10px;
        position: relative;
        margin-bottom: 15px;

        img {
            border-radius: 10px;
        }

        &-title {
            margin: 0;
            margin-left: 10px;
        }
        &-title::first-letter {
            text-transform: capitalize;
        }

        p {
            font-size: 14px;
        }

        &-quantity {
            display: flex;
            position: absolute;
            right: 20px;
            background-color: #C4C4C4;
            color: #292A2D;
            font-weight: bold;
            padding: 4px 10px;
            border-radius: 10px;

            p {
                margin-top: 0;
                margin-bottom: 0;
            }

            &-unit {
                margin-left: 5px;
            }
        }
    }

    @media screen and (min-width: 425px) {
        .ingredient {
            flex-direction: column;
            margin-right: 20px;
            padding: 8px;

            img {
                width: 75px;
                height: 75px;
            }

            &-title {
                margin: 0;
                margin-bottom: 10px;
            }

            &-quantity {
                position: static;
            }
        }
    }
</style>