<template>
    <div class="ingredient">
        <img src="@/assets/img/bg.jpg" width="40" height="40" alt="Ingrédient 1">
        <p>{{title}}</p>
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
                default: "title"
            },
            amount: {
                type: Number, 
                default: 50
            }
        },
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

        & > p {
            margin: 0;
            margin-left: 10px;
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
</style>