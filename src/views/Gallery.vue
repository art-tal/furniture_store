<template>
  <section class="container position-relative">
    <h2 class="text-capitalize text-center my-5">{{name}}</h2>
    <div class="row">
      <div class="photo col-12 col-md-6 col-lg-4 mb-5"
           v-for="(image, key) in getImages()"
           :key="key"
           @click="openSlider(key)"
      >
        <img :src="require(`../assets/image/${image}`)"
             :alt="name"
             class="w-100"
        >
      </div>
    </div>

    <gallery-slider :images="getImages()" v-if="showSlider"/>
  </section>
</template>

<script>
import GallerySlider from "../components/GallerySlider.vue"

export default {
  name: "Gallery",

  components: {
    GallerySlider,
  },

  data() {
    return {
      images: [
          "Sliding.jpg",
          "Sliding.jpg",
          "Sliding.jpg",
          "Sliding.jpg",
          "Sliding.jpg",
          "Sliding.jpg",
          "Sliding.jpg",
          "Sliding.jpg",
          "Sliding.jpg",
          "Sliding.jpg",
      ],
      slug: "",
      name: "",
      showSlider: false,
    }
  },

  created() {
    this.getImages();
  },

  methods: {
    getImages() {
      this.slug = this.$route.params.slug;
      this.name = this.$route.params.name;
      console.log(this.name);
      return this.images;
    },

    openSlider(key) {
      console.log(key);
      this.showSlider = !this.showSlider;
    }
  },
}
</script>

<style scoped lang="scss">
  .photo {
    img {
      border-radius: 10px;
    }

  }
</style>