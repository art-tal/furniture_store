<template>
    <section class="container-fluid">
      <div class="container position-relative">
        <img src="../assets/image/nail.png" alt="nail" class="nail position-absolute">
        <img src="../assets/image/Error_404.png" alt="Page not found" class="board position-absolute">
      </div>

<!--        <header>-->
<!--            <h1>-->
<!--                НЕ ТУДИ ПОВЕРНУЛИ?-->
<!--                <br>-->
<!--                СТОРІНКИ, НА ЯКУ ЗРОБЛЕНО ЗАПИТ, НЕ ІСНУЄ.-->
<!--            </h1>-->
<!--        </header>-->

<!--        <div class="body">-->
<!--            <h2>Error 404</h2>-->
<!--        </div>-->

<!--        <footer>-->
<!--            <h3>-->
<!--                Ви можете перейти на головну сторінку або повернутися на попередню сторінку.-->
<!--                <br>-->
<!--                Або розгляньте можливість відвідати одну з популярних сторінок.-->
<!--            </h3>-->
<!--        </footer>-->

    </section>
</template>

<script>

    export default {
        name: "Error404",

        // mounted() {
        //     setTimeout(() => {this.$store.commit("setShowPreload", false);}, 50)
        // },
    }
</script>

<style lang="scss" scoped>
@import "../assets/styles/index";

@keyframes rotation {
  0% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
     }
}

    section.container-fluid {
      height: 80vh;
      background-image: url(../assets/image/wall.png);
      background-repeat: no-repeat;
      background-position: center center;
      -webkit-background-size: cover;
      background-size: cover;
      padding: 50px 0;
      .container {
        img {
          display: block;
          &.nail {
            z-index: 10;
            width: 40px;
            top: -10px;
            left: 49%;
            right: 50%;
          }
          &.board {
            width: 60%;
            top: -20px;
            left: 20%;
            right: 20%;

            transform-origin: 333px 8%;
            transform: rotate(15deg);
            animation-name: rotation;
            animation-duration: 2s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-direction: alternate-reverse;
          }
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