<template>
<div class="my-carousel container-fluid">
  <div class="container frame position-relative">
    <div class="image_container bg-carousel"
         :style="'background-image: url(' + getImage + ');'">

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
      index: 0,
      images: [
          'children_room-1.jpg',
          'cabinet-1.jpg',
          'cabinet-2.jpg',
          'cabinet-3.jpg',
          'cabinet-4.jpg',
          'cabinet-5.jpg',
          'cabinet-6.jpg',
          'cabinet-7.jpg',
          'kitchen-1.jpg',
          'hallway-1.jpg',
          'hallway-2.jpg'
      ],
      pos: 100,
    }
  },

  created() {
    setInterval( this.nextImage, 5000);
    // setInterval( this.slide, 5000);
    // this.slide();

  },

  computed: {
    getImage() {
      return require(`../assets/image/carousel_img/${this.images[this.index]}`);
    }
  },

  methods: {
    nextImage() {
      ++this.index;
      if (this.index >= this.images.length) {
        this.index = 0;
      }
    },
    prevImage() {
      --this.index;
      if (this.index < 0) {
        this.index = this.images.length - 1;
      }
    },

    // slide() {
    //   while (this.pos > 0) {
    //     setTimeout( () => {--this.pos;}, 10 );
    //     console.log(this.pos);
    //   }
    //   this.nextImage();
    //   while (this.pos < 100) {
    //     setTimeout( () => {++this.pos;}, 10 );
    //     console.log(this.pos);
    //   }}


  }
}
</script>

<style scoped lang="scss">
  .container-fluid.my-carousel {
    padding: 0;
    background-color: #eeeeee;
  }

  .bg-carousel {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

      .frame {
        height: 500px;
        width: 100%;
        .image_container {
          width: 100%;
          height: 100%;
        }

        .btn_control {
          box-sizing: border-box;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(0,0,0,0.05);
          top: 230px;
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
        #prev {
          left: 20px;
        }
        #next {
          right: 20px;
        }
      }




</style>