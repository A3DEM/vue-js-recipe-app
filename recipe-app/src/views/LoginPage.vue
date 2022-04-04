<template>
    <div id="login-page">
        <div class="content">
            <h1>Se connecter</h1>
            <div class="identifier">
                <label for="id">Identifiant</label>
                <input type="text" placeholder="eren@neggis.com" name="id" id="id">
            </div>
            <div class="password">
                <label for="password">Mot de passe</label>
                <input type="password" placeholder="6+ caractères" name="password" id="password">
            </div>
            <ButtonComp link="/home"/>
            <p class="forgot">Vous avez perdu votre mot de passe ? <br> <a class="link" href="#">Récupérer votre mot de passe.</a></p>
            <p class="or">OU</p>
            <div class="social-links">
                <img src="../assets/img/twitter.svg" alt="Twitter">
                <img src="../assets/img/facebook.svg" alt="Facebook">
                <img src="../assets/img/google.svg" alt="Google">
            </div>
        </div>
    </div>
</template>

<script>
import ButtonComp from '@/components/ButtonComp.vue';


export default {
    name : "LoginPage",
    components: {
        ButtonComp,
    },
        
    }
</script>

<style lang="scss" scoped>
    #login-page {
        padding: 0px 40px;
        background-color: #202124;
        color: white;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .content {
            display: flex;
            flex-direction: column;

            h1 {
            margin-block-start: 0em;
            margin-block-end: 0em;
            margin-bottom: 24px;
            font-size: 48px;
            line-height: 1;
            }

            .link {
                color: #23873F;
                text-decoration-color: #23873F;     
            }

            .identifier, .password {
                display: flex;
                flex-direction: column;
                margin-top: 10px;
                margin-bottom: 24px;
                position: relative;

                label {
                    display: flex;
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
                    min-width: 300px;
                }
            }

            .password {
                margin-bottom: 8px;
            }

            .or {
                text-align: center;
                position: relative;
                margin: 10px 0px;
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
            font-size: 14px;
        }
    }
</style>