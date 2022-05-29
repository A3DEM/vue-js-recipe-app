<template>
    <div class="recipe-content-step">
        <span class="recipe-step">{{number+1}}</span>
        <!-- Les étapes n'ont pas titres mais en décommentant la ligne il est possible de les ajouter -->
        <!-- <h3 class="recipe-info-title">
            Dégustation
        </h3> -->
        <p class="recipe-info-paragraph">
            {{content}}
        </p>
    </div>
</template>

<script>
    export default {
        name : "StepComp",
        props: {
            content: {
                type: String,
                required : true
            },
            number: {
                type: Number,
                required : true
            }
        },
    }
</script>

<style lang="scss" scoped>
    .recipe-content {
        &-step {
            display: grid;
            grid-template-columns: 1fr 5fr;
            justify-items: start;
            align-items: start;
            margin-bottom: 20px;

            .recipe-step {
                background-color: #C4C4C4;
                color: #292A2D;
                text-align: center;
                font-weight: bold;
                padding: 4px 10px;
                border-radius: 10px;
                min-width: 10px;
                align-self: baseline;
            }

            .recipe-info {

                &-title {
                    margin: 5px 0px;
                    font-size: 16px;
                    font-weight: normal;
                    color: #C4C4C4;
                }

                &-paragraph {
                    margin: 5px 0px;
                    font-size: 13px;
                    color: #828282;
                    grid-column: 2/3;
                }
            }
        }
    }

    @media screen and (min-width: 845px) {        
        .recipe-content {

            &-step {
                grid-template-columns: 1fr 8fr;
                align-items: center;
                min-width: 340px;
                max-width: 440px;
                margin-right: 40px;
            }
        }
    }
</style>