<template>
    <div id="home">
        <MenuComp/>
        <h1>Bienvenue</h1>
        <p>Quel plat allez-vous cuisiner aujourd'hui ?</p>
        <div class="lastest-recipe">
            <h2>Les recettes du moments</h2>
            <div class="list">
                <HighlightedRecipe
                    v-for="reciepe in reciepes" 
                    :key="reciepe.id" 
                    :reciepe="reciepe"
                />
                <!-- Duplication pour avoir + de recettes -->
                <HighlightedRecipe
                    v-for="reciepe in reciepes" 
                    :key="reciepe.id" 
                    :reciepe="reciepe"
                />
                <HighlightedRecipe
                    v-for="reciepe in reciepes" 
                    :key="reciepe.id" 
                    :reciepe="reciepe"
                />
            </div>
        </div>
        <div class="less-caloric">
            <h2>Les recettes les moins caloriques</h2>
            <div class="list">
                <HighlightedRecipe
                    v-for="reciepe in reciepes" 
                    :key="reciepe.id" 
                    :reciepe="reciepe"
                />
                <!-- Duplication pour avoir + de recettes -->
                <HighlightedRecipe
                    v-for="reciepe in reciepes" 
                    :key="reciepe.id" 
                    :reciepe="reciepe"
                />
                <HighlightedRecipe
                    v-for="reciepe in reciepes" 
                    :key="reciepe.id" 
                    :reciepe="reciepe"
                />
            </div>
        </div>
    </div>
</template>

<script>

import api from '@/plugins/axios'
import MenuComp from '@/components/MenuComp.vue';
import HighlightedRecipe from '@/components/HighlightedRecipe.vue';

    export default {
        name: "HomePage",
        components: {
            MenuComp,
            HighlightedRecipe,
        },
        data() {
            return {
                reciepes: []
            }
        },
        mounted () {
            api.get('reciepes?populate=*').then((response) => {
                this.reciepes = response.data.data
                console.log(this.reciepes);
            });
        },
    }
</script>

<style lang="scss" scoped>
    #home {
        background-color: #202124;
        color: white;
        padding: 40px 40px 50px 40px;
        min-height: 100vh;

        h1 {
            margin: 0;
            line-height: 1;
            font-size: 32px;
        }
        p {
            margin: 0;
            font-size: 14px;
            color: #828282;
        }
        h2 {
            margin: 30px 0px 15px 0px;
        }

        .less-caloric {
            h2 {
                margin-top: 18px;
            }
        }

        .list {
            display: grid;
            grid-template-columns: 1fr;
        }
    }

    @media screen and (min-width: 845px) {
        #home {

            padding-left: 200px;
            .list {
                grid-template-columns: 1fr 1fr;
                grid-auto-rows: auto;
                grid-gap: 30px;
            }
        }
    }

    @media screen and (min-width: 1280px) {
        #home {
            .list {
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-gap: 20px;

                & a:nth-child(1) {
                    grid-column: span 2;
                    grid-row: span 2;
                    height: auto;

                    & > :nth-child(1) {
                        height: 500px;
                    }
                }
            }
        }
    }
</style>