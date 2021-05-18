<template>
<div class="my-carousel container-fluid">
  <div class="frame position-relative">
    <div class="image_container">
<!--      <img src="../assets/image/44654-9-china-cabinet-png-download-free.png" alt="photo-clip" class="image_item">-->
      <img v-for="(img_item, key) in images"
           :key="key"
           :src=`../assets/image/carousel_img/${img_item}`
            alt="photo-clip"
            class="image_item">
    </div>
    <button class="btn position-absolute btn_control" id="prev" @click="prevImage">
      <i class="bi bi-caret-left-fill"></i>
    </button>
    <button class="btn position-absolute btn_control" id="next" @click="nextImage">
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
      images: [
          'childroom-1.jpg',
          'gorka-1.jpg',
          'gorka-2.jpg',
          'gorka-3.jpg',
          'gorka-4.jpg',
          'gorka-5.jpg',
          'gorka-6.jpg',
          'gorka-7.jpg',
          'kitchen-1.jpg',
          'prihogaya-1.jpg',
          'prihogaya-2.jpg'
      ],
    }
  },

  created() {
    this.getImages();
  },

  methods: {
    // getImages() {
    //   let response = fetch('php/getImageCarousel.php');
    //   let list = response.text
    //   console.log(list);
    // }

    nextImage() {},
    prevImage() {},
  }
}
</script>

<style scoped lang="scss">
  .container-fluid.my-carousel {
    padding: 25px;
    background-color: #eeeeee;
  }


      .frame {
        height: 400px;
        .image_container img {
          display: block;
          width: 100%;
          height: 400px;
          object-fit: contain;
        }
        .btn_control {
          box-sizing: border-box;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.05);
          top: 180px;
          .bi {
            font-size: 2rem;
            margin: auto;
            color: rgba(255,255,255,0.4);
          }
          &:hover {
            background-color: rgba(0,0,0,0.3);
            .bi {
              color: #ffffff;
            }
          }
        }
        #next {
          right: 0;
        }
      }




</style>