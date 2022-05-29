<template>
    <div class="recipe">
        <div class="content">
            <div class="recipe-imgbox">
                <img class="recipe-img" :src="this.url" :alt="this.title">
            </div>
            <div class="recipe-content">
                <h1 class="recipe-content-title">{{this.title}}</h1>
                <div class="recipe-content-stars">
                    <svg v-for="n in this.star" :key="n" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#23873F"/>
                    </svg>
                    <svg v-for="m in this.emptyStar" :key="m" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#C4C4C4"/>
                    </svg>
                </div>
                <div class="recipe-content-img">
                    <img :src="this.url" :alt="this.title">
                </div>
                <ul class="recipe-content-ul">
                    <li>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.85714 20C5.51027 20 3.53929 19.217 2.15625 17.7353C0.745536 16.2232 0 14.0201 0 11.3638C0 8.86161 0.958928 6.07143 2.6308 3.70536C4.27009 1.38393 6.22366 0 7.85714 0C9.49062 0 11.4442 1.38393 13.0835 3.70536C14.7554 6.07143 15.7143 8.86161 15.7143 11.3638C15.7143 14.0201 14.9688 16.2232 13.558 17.7353C12.175 19.217 10.204 20 7.85714 20Z" fill="#C4C4C4"/>
                        </svg>
                        <p>{{this.ingredientsLength}} Ingrédients</p>
                    </li>
                    <li>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM15.75 11H9V4H11V9H15.75V11Z" fill="#C4C4C4"/>
                        </svg>
                        <p>{{this.time}} min.</p>
                    </li>
                    <li>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="8" width="5" height="10" fill="#C4C4C4"/>
                            <rect x="7.5" y="4.5" width="4" height="13" stroke="#C4C4C4"/>
                            <rect x="14.5" y="0.5" width="4" height="17" stroke="#C4C4C4"/>
                        </svg>
                        <!-- Le difficulté est vide dans la réponse de l'API -->
                        <p>Facile</p>
                    </li>
                    <li>    
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0022 0C4.66891 0 0.00224511 4.28889 0.00224511 10C0.00224511 12.3556 0.824467 14.5222 2.19113 16.2333L0.324467 18.1C0.116714 18.3078 0 18.5895 0 18.8833C0 19.1771 0.116714 19.4589 0.324467 19.6667C0.53222 19.8744 0.813994 19.9911 1.1078 19.9911C1.40161 19.9911 1.68338 19.8744 1.89113 19.6667L3.7578 17.8C5.52744 19.2241 7.73077 20.0003 10.0022 20C12.5578 20 15.1245 19.0222 17.0689 17.0667C18.0002 16.1408 18.7389 15.0396 19.2424 13.8267C19.7459 12.6138 20.0041 11.3132 20.0022 10V2.22222C20.0022 1 19.0022 0 17.78 0H10.0022ZM14.2578 10.2889L8.52447 15.4333C8.34669 15.6 8.06891 15.5889 7.90224 15.4222C7.82633 15.3475 7.78001 15.2479 7.77184 15.1417C7.76367 15.0355 7.7942 14.9299 7.8578 14.8444L10.5689 11.1444L6.06891 10.7C5.95897 10.6897 5.85437 10.6477 5.76779 10.5792C5.68121 10.5106 5.61636 10.4185 5.58108 10.3138C5.54581 10.2092 5.54163 10.0965 5.56905 9.98958C5.59647 9.88261 5.65432 9.78588 5.73558 9.71111L11.4689 4.56667C11.6467 4.4 11.9245 4.41111 12.0911 4.57778C12.2467 4.73333 12.2689 4.97778 12.1356 5.15556L9.42447 8.85556L13.9245 9.3C14.4245 9.34445 14.6245 9.95556 14.2578 10.2889Z" fill="#C4C4C4"/>
                        </svg>
                        <p>{{this.energy}} kcal</p>
                    </li>
                </ul>
                <div class="recipe-content-ingredients">
                    <h2>Ingrédients</h2>
                    <div class="recipe-content-ingredients-list">
                        <IngredientComp
                            v-for="(ingredient, index) in this.ingredients"
                            :key="index" 
                            :title="ingredient.name"
                            :amount="ingredient.quantity"
                        />
                    </div>
                </div>
                <div class="recipe-content-steps">
                    <h2>Étapes</h2>
                    <div class="recipe-content-steps-list">
                        <StepComp
                            v-for="(step, index) in this.steps"
                            :key="index"
                            :number="index"
                            :content="step"
                        />
                    </div>
                </div>
                <div class="recipe-content-rating">
                    <h2>Avis</h2>
                    <p>Vous avez pu tester la recette ? Donnez votre avis !</p>
                    <div class="recipe-content-stars">
                        <svg width="32" height="32" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#23873F"/>
                        </svg>
                        <svg width="32" height="32" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#23873F"/>
                        </svg>
                        <svg width="32" height="32" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#23873F"/>
                        </svg>
                        <svg width="32" height="32" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#23873F"/>
                        </svg>
                        <svg width="32" height="32" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#C4C4C4"/>
                        </svg>
                    </div>
                </div>
            </div>
            <router-link to="/home" class="recipe-back">
                <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.071 16L2.99998 8.92893L10.071 1.85786" stroke="#C4C4C4" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </router-link>
        </div>
        
    </div>
</template>

<script>

import api from '@/plugins/axios'
import IngredientComp from "../components/IngredientComp.vue"
import StepComp from '../components/StepComp.vue';

    export default {
        name:"RecipePage",
        components: {
        IngredientComp,
        StepComp
    },
        computed: {
            currentItem() {
                return this.$route.params.id;
            }
        },
        data() {
            return {
                recipe: "",
                title: "",
                url: "",
                ingredientsLength: "",
                time: "",
                energy : "",
                ingredients : "",
                steps : "",
                star : "",
                emptyStar :""
            }
        },
        mounted () {
            api.get('reciepes/'+this.$route.params.id +'?populate=*').then((response) => {
                
                this.recipe = response.data.data.attributes;
                this.title = this.recipe.Name;
                this.url = this.recipe.Image.data.attributes.url;
                this.ingredientsLength = this.recipe.Ingredients.length;
                this.time = (this.recipe.Duration / 60);
                this.energy = this.recipe.Energy;
                this.ingredients = this.recipe.Ingredients;
                this.steps = this.recipe.Steps;
                this.star = Math.round(this.recipe.Rating);
                this.emptyStar = 5 - this.star;
                // console.log(this.unrating);
            });
        }
    }
</script>

<style lang="scss" scoped>
    .recipe {
        background-color: #202124;
        color: white;
        position: relative;

        .content {
            max-width: 1024px;
        }

        &-imgbox {
            display: flex;
            justify-content: center;
            overflow: hidden;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(0deg, #202124 0%, rgba(32,33,36,0) 100%);
            }

            img {
                width: 150%;
                height: auto;
            }
        }

        &-content {
            padding: 0px 40px 20px 40px;
            
            &-title {
                margin: 16px 0px 0px 0px;
            }

            &-stars {
                display: flex;
                margin-bottom: 18px;

                svg {
                    margin-right: 3px;
                }
            }

            &-img {
                display: none;
            }

            &-ul {
                list-style-type: none;
                padding: 0;

                li {
                    display: flex;
                    align-items: center;
                    margin-bottom: 21px;

                    p {
                        margin: 0;
                        margin-left: 16px;
                    }
                }
            }

            &-ingredients, &-steps, &-rating {

                h2 {
                    font-size: 18px;
                }
            }

            &-rating {

                p {
                    font-size: 13px;
                    color: #828282;
                    margin: 0;
                }

                .recipe-content-stars {
                    margin-top: 20px;
                    margin-bottom: 0px;
                    display: flex;
                    justify-content: center;
                    svg {
                        margin: 0px 2px;
                    }
                }
            }
        }

        &-back {
            position: absolute;
            top: 40px;
            left: 40px;
            background-color: #202124;
            border-radius: 10px;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media screen and (min-width: 425px) {
        .recipe {

            &-content {

                &-ingredients {

                    &-list {
                        display: flex;
                        flex-wrap: wrap;
                    }
                }
            }
        
        }
    }

    @media screen and (min-width: 845px) {
        .recipe {

            padding: 20px 0px 20px 120px;

            &-imgbox {
                display: none;
            }

            &-content {

                &-stars {

                    svg {
                        width: 20px;
                        height: auto;
                    }
                }

                &-img {
                    display: block;
                    
                    img {
                        width: 100%;
                        height: auto;
                        border-radius: 10px;
                    }
                }

                &-ul {
                    display: flex;
                    margin-bottom: 21px;

                    li {
                        display: flex;
                        margin-right: 20px;

                        p {
                            margin-left: 8px;
                        }
                    }
                }

                &-ingredients, &-steps, &-rating {

                    h2 {
                        font-size: 24px;
                    }
                }

                &-ingredients {

                    &-list {
                        display: flex;
                        flex-wrap: wrap;
                    }
                }

                &-steps {

                    .recipe-info {

                        &-title {
                            font-size: 18px;
                            margin: 0;
                        }

                        &-paragraph {
                            grid-column: 1/3;
                            margin-top: 12px;
                        }
                    }
                }

                &-rating {
                    h2 {
                        margin: 0;
                        margin-bottom: 16px;
                    }

                    .recipe-content-stars {
                        display: flex;
                        justify-content: flex-start;
                        svg {
                            width: 30px;
                            height: auto;
                            margin: 0px 4px;
                        }
                    }
                }

            }
        
            &-back {
                background-color: #2D2D2D;            
                top: 40px;
                left: 40px;
            }
        }
    }
</style>