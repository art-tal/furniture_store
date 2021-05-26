<template>
  <div class="home mb-5">
    <carousel/>

    <div class="container">
      <h2 class="my-5 text-center">Our novelties</h2>
      <div class="row align-items-stretch">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5"
             v-for="(product, key) in products"
             :key="key"
        >
          <card :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Carousel,
    Card
  },

  data() {
    return {
      products: [
        {
          name: 'Kabinet',
          info: 'A card is a flexible and extensible content container.',
          avatar: 'cabinet.png',
          sale: false,
          date: new Date()- - 1000 * 60 * 60 * 24 * 10,
        },
        {
          name: 'Wardrobe',
          info: 'A card is a flexible and extensible content container.',
          avatar: 'wardrobe.png',
          sale: true,
          date: new Date() - 1000 * 60 * 60 * 24 * 500,
        },
        {
          name: 'Desk',
          info: 'A card is a flexible and extensible content container.',
          avatar: 'desk.png',
          sale: false,
          date: new Date() - 1000 * 60 * 60 * 24 * 120,
        },
        {
          name: 'Sliding',
          info: 'A card is a flexible and extensible content container.',
          avatar: 'Sliding.jpg',
          sale: false,
          date: new Date() - 1000 * 60 * 60 * 24 * 50,
        },
      ],
    }
  },




};
</script>

<style scoped lang="scss">
  .home {
    .container {
      .row {
        align-items: stretch;
      }
    }
  }
</style>
