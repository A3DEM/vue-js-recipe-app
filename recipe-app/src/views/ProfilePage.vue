<template>
    <div id="profile-page">
        <div class="content">
            <h1>Votre profil</h1>
            <p>Ici, vous pouvez gérer les informations de votre compte.</p>
            <div class="profile">
                <div class="profile-img">
                    <img src="@/assets/img/profile-pic.jpg" alt="Votre profil" height="250" width="250">
                </div>
                <div class="profile-info">
                    <h2>Vos informations</h2>
                    <h3>Nom</h3>
                    <p>Adem Duran</p>
                    <h3>Bio</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium laborum, odio repudiandae eum similique commodi qui cum numquam sequi excepturi iste aspernatur ipsam nam explicabo. Quo hic natus voluptas? Vero.</p>
                    <h3>Vos recettes</h3>
                    <p>Il semblerait que vous n'ayez toujours pas ajouté vos recettes chef !</p>
                </div>
            </div>

            <MenuComp active="profile"/>
        </div>
    </div>
</template>

<script>

import MenuComp from "@/components/MenuComp.vue"

    export default {
        name: "ProfilePage",
        components: {
            MenuComp
        },
    }
</script>

<style lang="scss" scoped>

    #profile-page {
        background-color: #202124;
        color: white;
        padding: 40px;
        padding-bottom: 86px;
        position: absolute;
        top: 0;
        right: 0;
        left: 0%;


        h1 {
            margin: 0;
            line-height: 1;
        }
        p {
            margin: 0;
            color: #828282;
            font-size: 14px;
        }

        .content {
            max-width: 530px;
            padding-bottom: 25px;
        }

        .profile {

            &-img {
                
                img {
                    border-radius: 10px;
                    max-width: 175px;
                    height: auto;
                    margin-top: 25px;
                }
            }

            &-name {
                color: white;
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
    @media screen and (min-width: 845px) {
        #profile-page {
            padding-left: 200px;
            bottom: 0;

            .content {
                padding-bottom: 0;
            }
        }
    }
</style>