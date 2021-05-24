<template>
  <footer class="container-fluid px-0">
    <div class="first_line bg-secondary py-4">
      <div class="container row m-auto">
        <div class="col-6">
          <i class="bi bi-telephone-fill"></i>
          <span>Call us: </span>
          <a href="/">+38093 55-55-555</a>
        </div>
        <div class="col-6">
          <i class="bi bi-envelope-fill"></i>
          <span>write to us: </span>
          <a href="">info@store.com</a>
        </div>
      </div>
    </div>

    <div class="second_line bg-dark text-secondary">
      <div class="container row justify-content-between mx-auto py-4">
        <div class="col-3 social">
          <h3>Social</h3>
          <div class="messengers d-flex justify-content-start pt-4">
            <a href="" class="facebook"></a>
            <a href="" class="twitter"></a>
            <a href="" class="instagram"></a>
            <a href="" class="youtube"></a>
          </div>
        </div>
        <div class="col-3"></div>
        <div class="col-3 contact">
          <h3>Contact Us</h3>
          <p>Furniture Store</p>
          <p>RIO media</p>
          <p>Ukraine, Mykolaev</p>
          <p><a src="/">+38093 55-55-555</a></p>
          <p><a src="/">info@store.com</a></p>
<!--          <hr>-->
          <div class="messengers d-flex justify-content-start pt-4">
            <a href="" class="viber"></a>
            <a href="" class="whatsapp"></a>
            <a href="" class="telegram"></a>
            <a href="" class="messenger"></a>
          </div>
        </div>
      </div>

    </div>

    <div class="third_line my-2">
      <div class="container m-auto row">
        <div class="col-6">
          &#xA9; Copyright 2021 Talanov A, All Rights Reserved
        </div>
        <div class="col-6 d-flex">
          <router-link to="/" class="person-link text-secondary">About Us</router-link>
          <span class="mx-3">|</span>
          <router-link to="/" class="person-link text-secondary">Delivery & Returns</router-link>
          <span class="mx-3">|</span>
          <router-link to="/" class="person-link text-secondary">Terms & Conditions</router-link>
          <span class="mx-3">|</span>
          <router-link to="/" class="person-link text-secondary">Contact Us</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import "../assets/styles/index";

a {
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 15px;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: 100%;
  background-size: 100%;
}

.social {
  a {
    &.facebook {
      background-image: url(../assets/image/icons/facebook-gray.png);
      &:hover {
        background-image: url(../assets/image/icons/facebook.png);
      }
    }
    &.twitter {
      background-image: url(../assets/image/icons/twitter-gray.png);
      &:hover {
        background-image: url(../assets/image/icons/twitter.png);
      }
    }
    &.instagram {
      background-image: url(../assets/image/icons/instagram-gray.png);
      &:hover {
        background-image: url(../assets/image/icons/instagram.png);
      }
    }
    &.youtube {
      background-image: url(../assets/image/icons/youtube-gray.png);
      &:hover {
        background-image: url(../assets/image/icons/youtube.png);
      }
    }
  }
}

.messengers {
  border-top: 1px solid #6c757d;
  a {
    &.viber {
      background-image: url(../assets/image/icons/viber-gray.png);
      &:hover {
        background-image: url(../assets/image/icons/viber.png);
      }
    }
    &.whatsapp {
      background-image: url(../assets/image/icons/whatsapp-gray.png);
      &:hover {
        background-image: url(../assets/image/icons/whatsapp.png);
      }
    }
    &.telegram {
      background-image: url(../assets/image/icons/telegram-gray.png);
      &:hover {
        background-image: url(../assets/image/icons/telegram.png);
      }
    }
    &.messenger {
      background-image: url(../assets/image/icons/messenger-gray.png);
      &:hover {
        background-image: url(../assets/image/icons/messenger.png);
      }
    }
  }
}

</style>