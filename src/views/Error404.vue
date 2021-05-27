<template>
    <section class="container-fluid">
      <div class="container position-relative">
        <img src="../assets/image/nail.png" alt="nail" class="nail position-absolute">
        <img src="../assets/image/Error_404.png" alt="Page not found" class="board position-absolute">
      </div>
    </section>
</template>

<script>

    export default {
        name: "Error404",
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
            top: 18px;
            left: 20%;
            right: 20%;

            transform-origin: 50% 2%;
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


    @media (min-width: 576px) and (max-width: 767px) {
        section.container-fluid {
          height: 60vh;
        }
    }

    @media (max-width: 575.9px) {
        section.container-fluid {
          height: 60vh;
        }
    }
</style>