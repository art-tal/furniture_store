<template>
    <section class="container-fluid">
<!--        <img :src="require('../img/' + dirBG + '/notFound.jpg')" alt="Page not found">-->
        <header>
            <h1>
                НЕ ТУДИ ПОВЕРНУЛИ?
                <br>
                СТОРІНКИ, НА ЯКУ ЗРОБЛЕНО ЗАПИТ, НЕ ІСНУЄ.
            </h1>
        </header>

        <div class="body">
            <h2>Error 404</h2>
        </div>

        <footer>
            <h3>
                Ви можете перейти на головну сторінку або повернутися на попередню сторінку.
                <br>
                Або розгляньте можливість відвідати одну з популярних сторінок.
            </h3>
        </footer>

    </section>
</template>

<script>
    // import imageSizeMixin from "../mixins/imageSizeMixin";
    //
    // export default {
    //     name: "Error404",
    //
    //     mixins: [
    //         imageSizeMixin
    //     ],
    //     mounted() {
    //         setTimeout(() => {this.$store.commit("setShowPreload", false);}, 50)
    //     },
    // }
</script>

<style lang="scss" scoped>

    section.container-fluid {
        position: relative;
        margin: 0;
        padding: 0;
        img {
            width: 100%;
        }
        header {
            position: absolute;
            top: 100px;
            left: 0;
            width: 100%;
            h1 {
                color: #F0F0F0;
                font-size: 3.5rem;
                line-height: 2;
                &:first-line {
                    font-size: 4.5rem;
                    font-weight: bolder;
                }
            }
        }

        .body {
            position: absolute;
            top: 300px;
            left: 0;
            width: 100%;
            h2 {
                font-size: 15rem;
                color: rgba(0,0,255,0.1);
            }
        }

        footer {
            position: absolute;
            bottom: 200px;
            left: 0;
            width: 100%;
            h3 {
                color: #F0F0F0;
                line-height: 2;
                font-size: 2.0rem;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 991.9px) {
        section.container-fluid {
            header {
                top: 75px;
                h1 {
                    font-size: 3.0rem;
                    &:first-line {
                        font-size: 4.0rem;
                    }
                }
            }

            .body {
                top: 250px;
                h2 {
                    font-size: 15rem;
                }
            }

            footer {
                bottom: 75px;
                h3 {
                    line-height: 2;
                    font-size: 1.8rem;
                }
            }
        }
    }

    @media (min-width: 576px) and (max-width: 767.9px) {
        section.container-fluid {
            header {
                top: 40px;
                h1 {
                    font-size: 2.2rem;
                    line-height: 1.5;
                    &:first-line {
                        font-size: 3.2rem;
                    }
                }
            }

            .body {
                top: 150px;
                h2 {
                    font-size: 12rem;
                }
            }

            footer {
                bottom: 30px;
                h3 {
                    line-height: 1.5;
                    font-size: 1.6rem;
                }
            }
        }
    }

    @media (max-width: 575.9px) {
        section.container-fluid {
            header {
                top: 10px;
                h1 {
                    font-size: 1.6rem;
                    line-height: 1.5;
                    &:first-line {
                        font-size: 2.5rem;
                    }
                }
            }

            .body {
                top: 100px;
                h2 {
                    font-size: 8rem;
                }
            }

            footer {
                bottom: 10px;
                h3 {
                    color: #F0F0F0;
                    line-height: 1.2;
                    font-size: 1.4rem;
                }
            }
        }
    }
</style>