<template>
    <div id="search-page">
        <div class="content">
            <h1>Recherche</h1>
            <p>Trouvez de nouvelles recettes</p>


            <!-- Barre de recherche -->
            <div class="search-bar">
                <input type="text" placeholder="Recherchez votre recette">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8462 8.46154C13.8462 6.97917 13.3193 5.71114 12.2656 4.65745C11.2119 3.60377 9.94391 3.07692 8.46154 3.07692C6.97917 3.07692 5.71114 3.60377 4.65745 4.65745C3.60377 5.71114 3.07692 6.97917 3.07692 8.46154C3.07692 9.94391 3.60377 11.2119 4.65745 12.2656C5.71114 13.3193 6.97917 13.8462 8.46154 13.8462C9.94391 13.8462 11.2119 13.3193 12.2656 12.2656C13.3193 11.2119 13.8462 9.94391 13.8462 8.46154ZM20 18.4615C20 18.8782 19.8478 19.2388 19.5433 19.5433C19.2388 19.8478 18.8782 20 18.4615 20C18.0288 20 17.6683 19.8478 17.3798 19.5433L13.2572 15.4327C11.8229 16.4263 10.2244 16.9231 8.46154 16.9231C7.31571 16.9231 6.21995 16.7007 5.17428 16.256C4.12861 15.8113 3.22716 15.2103 2.46995 14.4531C1.71274 13.6959 1.11178 12.7945 0.667067 11.7488C0.222356 10.7031 0 9.60737 0 8.46154C0 7.31571 0.222356 6.21995 0.667067 5.17428C1.11178 4.12861 1.71274 3.22716 2.46995 2.46995C3.22716 1.71274 4.12861 1.11178 5.17428 0.667067C6.21995 0.222356 7.31571 0 8.46154 0C9.60737 0 10.7031 0.222356 11.7488 0.667067C12.7945 1.11178 13.6959 1.71274 14.4531 2.46995C15.2103 3.22716 15.8113 4.12861 16.256 5.17428C16.7007 6.21995 16.9231 7.31571 16.9231 8.46154C16.9231 10.2244 16.4263 11.8229 15.4327 13.2572L19.5553 17.3798C19.8518 17.6763 20 18.0369 20 18.4615Z" fill="#C5C5C5"/>
                </svg>
            </div>

            <!-- Filtres et tri -->
            <div class="filter-sort">
                <div class="filter">
                    <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="3.73193" y1="1.5" x2="3.73193" y2="23.5" stroke="#C5C5C5" stroke-width="3" stroke-linecap="round"/>
                        <line x1="14.4465" y1="1.5" x2="14.4465" y2="23.5" stroke="#C5C5C5" stroke-width="3" stroke-linecap="round"/>
                        <circle cx="3.57143" cy="9.28578" r="2.57143" fill="#292A2D" stroke="#C5C5C5" stroke-width="2"/>
                        <circle cx="14.286" cy="17.143" r="2.57143" fill="#292A2D" stroke="#C5C5C5" stroke-width="2"/>
                    </svg>
                    <p>Filtre</p>
                </div>
                <div class="sort">
                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.5" y1="1.5" x2="18.5" y2="1.5" stroke="#C5C5C5" stroke-width="3" stroke-linecap="round"/>
                        <line x1="1.5" y1="7.5" x2="14.5" y2="7.5" stroke="#C5C5C5" stroke-width="3" stroke-linecap="round"/>
                        <line x1="1.5" y1="13.5" x2="10.5" y2="13.5" stroke="#C5C5C5" stroke-width="3" stroke-linecap="round"/>
                    </svg>

                    <p>Tri</p>
                </div>
            </div>

            <!-- Trends et dernières recherches -->
            <div class="research">
                <h2 class="trend-title">Recherches populaires</h2>
                <div class="trend">
                    <SearchComp title="Salade César" type="trend"/>
                    <SearchComp title="Mille-feuilles" type="trend"/>
                    <SearchComp title="Poulet tandori" type="trend"/>
                    <SearchComp title="Croque-monsieur" type="trend"/>
                </div>
                <h2 class="last-title">Dernières recherches</h2>
                <div class="trend">
                    <SearchComp title="Salade César retro"/>
                    <SearchComp title="Poulet curry"/>
                    <SearchComp title="Pâtes saumon"/>
                    <SearchComp title="Gözleme"/>
                </div>
            </div>

            <!-- Menu -->
            <MenuComp active="search"/>
        </div>
    </div>
</template>

<script>
    import SearchComp from "@/components/SearchComp.vue"
    import MenuComp from "@/components/MenuComp.vue"

    export default {
        name: "SearchPage",
        components: {
            SearchComp,
            MenuComp
        }
    }
</script>

<style lang="scss" scoped>
    #search-page {
        background-color: #202124;
        color: white;
        padding: 40px;
        padding-bottom: 86px;

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

            .search-bar {
                background-color: #292A2D;
                display: flex;
                position: relative;
                border-radius: 10px;
                margin-top:34px;
                margin-bottom: 22px;

                input {
                    background-color: transparent;
                    width: 100%;
                    border: none;
                    font-family: "Poppins", sans-serif;
                    padding: 20px;
                    color: white;
                }

                svg {
                    position: absolute;
                    right: 20px;
                    top: 20px;
                }
            }

            .filter-sort {
                display: flex;
                margin-bottom: 20px;

                div {
                    display: flex;
                    align-items: center;
                    background-color: #292A2D;
                    padding: 16px 20px;
                    border-radius: 10px;
                    
                    p {
                        margin-left: 10px;
                    }
                }

                div:first-child {
                    margin-right: 20px;
                }
            }

            .research {

                h2 {
                    margin-bottom: 0;
                }
            }
        }
    }

    @media screen and (min-width: 845px) {
        #search-page {
            padding-left: 200px;
        }
    }
</style>