<template>
  <div class="home">
    <carousel/>

    <div class="container">
      <div class="row">
        <div class="col-3"
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
          name: 'Kitchen',
          info: 'A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.',
          avatar: '../assets/image/44654-9-china-cabinet-png-download-free.png',
          date: new Date(),
        }
      ],
    }
  },




};
</script>
