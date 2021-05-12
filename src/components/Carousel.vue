<template>
<div class="my-carousel container-fluid bg-secondary">
  <div class="frame relative w-100">
    <div class="image_container w-100">
      <img src="../assets/image/44654-9-china-cabinet-png-download-free.png" alt="photo-clip" class="image-item">
    </div>
    <button class="btn absolute" id="prev">
      <i class="bi bi-caret-left-fill"></i>
    </button>
    <button class="btn absolute" id="next">
      <i class="bi bi-caret-right-fill"></i>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {

    }
  },

  methods: {}
}
</script>

<style scoped lang="scss">
  .container-fluid.my-carousel {
    height: 500px;

    .frame {
      .img-container {
        img.image-item {
          display: block;
          height: 100% !important;
        }
      }
    }
  }


</style>