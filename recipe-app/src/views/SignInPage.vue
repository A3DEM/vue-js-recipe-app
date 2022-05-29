<template>
    <div id="sign-in-page">
        <div class="content">
            <h1>S'inscrire</h1>
            <div class="firstname">
                <label for="firstname">Prénom</label>
                <input type="text" placeholder="Eren" name="firstname" id="firstname">
            </div>
            <div class="name">
                <label for="name">Nom</label>
                <input type="text" placeholder="Jaeger" name="name" id="name">
            </div>
            <div class="identifier">
                <label for="id">Identifiant</label>
                <input type="text" placeholder="eren@neggis.com" name="id" id="id">
            </div>
            <div class="password">
                <label for="password">Mot de passe</label>
                <input type="password" placeholder="6+ caractères" name="password" id="password">
            </div>
            <div class="button">
                <ButtonComp link="/home" title="Créer un compte"/>
                <p class="forgot">Déjà un compte ? <router-link class="link" to="/login">Connectez-vous à votre compte.</router-link> </p>
            </div>
            <div class="other">
                <p class="or">OU</p>
                <div class="social-links">
                    <img src="../assets/icon/twitter.svg" alt="Twitter">
                    <img src="../assets/icon/facebook.svg" alt="Facebook">
                    <img src="../assets/icon/google.svg" alt="Google">
                </div>
            </div>
        </div>
        <div class="illustration">
        </div>
    </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue';


export default {
    name : "SingInPage",
    components: {
        ButtonComp,
    },
        
    }
</script>

<style lang="scss" scoped>
    #sign-in-page {
        padding: 0px 40px;
        background-color: #202124;
        color: white;
        height: 100vh;
        display: grid;
        align-items: center;
        justify-items: center;

        .content {
            display: grid;
            grid-template-columns: 1fr;
            max-width: 400px;

            h1 {
            margin-block-start: 0em;
            margin-block-end: 0em;
            margin-bottom: 24px;
            font-size: 32px;
            line-height: 1;
            }

            .link {
                color: #23873F;
                text-decoration-color: #23873F;     
            }

            .name, .firstname, .identifier, .password {
                margin-top: 10px;
                margin-bottom: 24px;
                position: relative;

                label {
                    background-color: #202124;
                    padding: 0px 10px;
                    position: absolute;
                    top:0;
                    left: 0;
                    transform: translate(25px, -50%);
                }

                input {
                    background-color: #202124;
                    outline: none;
                    border: 2px solid #C4C4C4;
                    border-radius: 10px;
                    padding: 15px 20px;
                    font-family: 'Poppins', sans-serif;
                    color: white;
                }
            }

            .password {
                margin-bottom: 8px;
            }

            .button, .name, .firstname, .identifier, .password {
                display: grid;
                grid-template-columns: 1fr;
            }

            .or {
                text-align: center;
                position: relative;
                margin: 20px 0px 5px 0px;
                font-weight: bold;
                &::before {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    content: "";
                    background-color: #828282;
                    width: 40%;
                    height: 2px;
                }
                &::after {
                    position: absolute;
                    right: 0;
                    top: 50%;
                    content: "";
                    background-color: #828282;
                    width: 40%;
                    height: 2px;
                }
            }

            .social-links {
                display: flex;
                justify-content: space-between;
                padding: 15px 52px;
            }
        }
        .forgot {
            text-align: center;
            line-height: 1.2;
            font-size: 13px;
        }

        .illustration {
            display: none;
        }
    }

    @media screen and (min-width: 1024px) {

        #sign-in-page {
            grid-template-columns: 1fr 1fr;
            padding: 0;

            .illustration {
                display: block;
                width: 50vw;
                height: 100vh;
                background: linear-gradient(0deg, #202124 0%, rgba(32,33,36,0) 100%), url(../assets/img/bg.jpg);
                background-size: cover;
                background-position: center;
                position: relative;
            }
        }
    }
</style>