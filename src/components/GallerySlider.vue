<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade position-fixed w-100" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active"
           v-for="(image, key) in images"
           :key="key"
      >
        <img :src="require(`../assets/image/${image}`)" class="d-block w-100" :alt="image">
      </div>

    </div>
    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>

    <button class="close btn btn-light position-absolute d-block">
      <i class="bi bi-x-lg text-dark"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "GallerySlider",
  props: {
    images: Array,
  },

  data() {
    return {

    }
  },

}
</script>

<style scoped lang="scss">

.carousel.slide {
  top: 114px;
  left: 0;
  right: 0;
  z-index: 10;
  height: 80vh;

  .carousel-inner {
    .carousel-item {
      height: 100%;
      img {
        //width: 100%;
        object-fit: contain;
      }
    }
  }



  .close {
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 15;
    }
}

</style>