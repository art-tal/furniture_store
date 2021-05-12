<template>
<div class="my-carousel container-fluid">
  <div class="frame position-relative">
    <div class="image_container">
      <img src="../assets/image/44654-9-china-cabinet-png-download-free.png" alt="photo-clip" class="image_item">
    </div>
    <button class="btn position-absolute btn_control" id="prev">
      <i class="bi bi-caret-left-fill"></i>
    </button>
    <button class="btn position-absolute btn_control" id="next">
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