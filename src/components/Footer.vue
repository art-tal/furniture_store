<template>
  <footer class="container-fluid px-0">
    <div class="first_line bg-secondary py-4">
      <div class="container row m-auto">
        <div class="col-md-6 col-12 mb-3  text-left ">
          <a href="/" class="d-inline text-dark">
            <i class="bi bi-telephone-fill"></i>
             Call us:
            <span >+38093 55-55-555</span>
          </a>

        </div>
        <div class="col-md-6 col-12 mb-3  text-left ">
          <a href="/" class="d-inline text-dark">
            <i class="bi bi-envelope-fill"></i>
             Write to us:
            <span>info@store.com</span>
          </a>

        </div>
      </div>
    </div>

    <div class="second_line bg-dark text-secondary">
      <div class="container row justify-content-between mx-auto py-4">
        <div class="col-md-4 col-12 mb-4 social w-auto">
          <h3>Social</h3>
          <div class="messengers d-flex justify-content-start pt-4">
            <a href="https://www.facebook.com/" class="facebook" target="_blank"></a>
            <a href="https://www.twitter.com" class="twitter" target="_blank"></a>
            <a href="https://www.instagram.com" class="instagram" target="_blank"></a>
            <a href="https://www.youtube.com" class="youtube" target="_blank"></a>
          </div>
        </div>
        <div class="col-md-4 col-12 mb-4 information">
          <h3>Information</h3>
          <ul>
            <li>Бесплатный замер;</li>
            <li>Разработка дизайна;</li>
            <li>Разработка технической документации;</li>
            <li>Просчет стоимости;</li>
            <li>Подписание договора;</li>
            <li>Изготовление;</li>
            <li>Доставка и установка</li>
          </ul>
        </div>
        <div class="col-md-4 col-12 mb-4 contact">
          <h3>Contact Us</h3>
          <p>Furniture Store</p>
          <p>RIO media</p>
          <p>Ukraine, Mykolaev</p>
          <p><a src="/" class="d-inline">+38(093) 55-55-555</a></p>
          <p><a src="/" class="d-inline">info@store.com</a></p>
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

    <div class="third_line py-2">
      <div class="container m-auto d-lg-flex justify-content-between">
        <div class="mb-3 text-lg-left text-center">
          &#xA9; Copyright 2021 Talanov A, All Rights Reserved
        </div>
        <div class="d-sm-flex justify-content-between">
          <router-link to="/" tag="a" class="d-sm-inline-block d-block mb-3 w-auto h-auto text-secondary">About Us</router-link>
          <span class="mx-3 d-none d-sm-inline">|</span>
          <router-link to="/" tag="a" class="d-sm-inline-block d-block mb-3 w-auto h-auto text-secondary">Delivery & Returns</router-link>
          <span class="mx-3 d-none d-sm-inline">|</span>
          <router-link to="/" tag="a" class="d-sm-inline-block d-block mb-3 w-auto h-auto text-secondary">Terms & Conditions</router-link>
          <span class="mx-3 d-none d-sm-inline">|</span>
          <router-link to="/" tag="a" class="d-sm-inline-block d-block mb-3 w-auto h-auto text-secondary">Contact Us</router-link>
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

.first_line {
  a {
    .bi {
      display: inline-block;
      padding: 8px;
      margin-right: 10px;
      text-align: center;
      border-radius: 50%;
      background-color: $secondary_color;
      width: 40px;
      height: 40px;
    }
    &:hover {
      text-decoration: none;
      .bi {
        background-color: #fff;
        color: #000000;
      }
      span {
        text-decoration: underline;
      }
    }
  }
}

.second_line {
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

  .information {
    ul {
      list-style-type: none;
      padding: 0;
      li {
        &::before {
          content: '\203A';
          font-size: 2rem;
          margin-right: 10px;
        }
      }
    }
  }

  .messengers {
    border-top: 1px solid $secondary-color;
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
}

.third_line {
  margin: 0;
  background-color: #000;
}

</style>