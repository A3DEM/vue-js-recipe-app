<template>
    <div id="settings-page">
        <div class="content">
            <h1>Paramètres</h1>
            <p>Ici, vous pouvez gérer les paramètres de l'application.</p>
            <div class="settings">
                <SettingComp type="change-profile" title="Mes profils"/>
                <SettingComp type="data" title="Mes données"/>
                <SettingComp type="heart" title="Mes likes"/>
                <SettingComp type="notification" title="Mes notifications"/>
                <SettingComp type="location" title="Ma localisation"/>
                <SettingComp type="power-off" title="Se déconnecter"/>
            </div>

            <MenuComp active="settings"/>
        </div>
    </div>
</template>

<script>

import MenuComp from "@/components/MenuComp.vue"
import SettingComp from "@/components/SettingComp.vue"

    export default {
        name: "ProfilePage",
        components: {
            MenuComp,
            SettingComp
        },
    }
</script>

<style lang="scss" scoped>

    #settings-page {
        background-color: #202124;
        color: white;
        padding: 40px;
        padding-bottom: 86px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
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
        #settings-page {
            padding-left: 200px;

            .content {
                padding-bottom: 0;
            }
        }
    }
</style>