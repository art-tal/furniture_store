<template>
  <div class="before_nav container-fluid bg-dark mx-0 px-0 py-2 text-secondary">
    <div class="container d-flex">
<!--      <div class="row">-->
        <div class="mr-4">
          <label for="choice" class="mr-2 mb-0">Language:</label>
          <select id="choice"
                  name="languages"
                  v-model="language"
                  class="bg-dark text-light border-0">
            <option v-for="(lang, key) in languages"
                    :key="key"
                    :value="lang"
                    selected>{{ lang }}</option>

          </select>
        </div>
        <div class="mr-4">
          <label for="currency" class="mr-2 mb-0">Currency:</label>
          <select name="currency"
                  id="currency"
                  v-model="currency"
                  class="bg-dark text-light border-0">
          <option v-for="(cur, key) in currencys"
                  :key="key"
                  :value="cur">{{cur}}</option>
        </select>
        </div>
        <div class="flex-grow-1 text-right">
          <i class="bi bi-person-circle text-light" @click="togglePersonMenu"></i>
          <div class="wrap" :class="{'active-wrap' : showPersonMenu}">
            <router-link to="/" class="person-link text-white">Account</router-link>
            <span class="mx-3">|</span>
            <router-link to="/" class="person-link text-white">Wishlist</router-link>
            <span class="mx-3">|</span>
            <router-link to="/" class="person-link text-white">Log In</router-link>
            <span class="mx-3">|</span>
            <router-link to="/" class="person-link text-white">Sign Up</router-link>
          </div>

        </div>
<!--      </div>-->
    </div>

  </div>
  <nav-app/>
</template>

<script>
import Nav from "./Nav";

export default {
  name: "Header",

  components: {
    navApp: Nav,
  },

    data() {
      return {
        languages: [
            "Ukraine",
            "Russia",
            "English",
        ],
        language: "English",

        currencys: [
            "USD, $",
            "EUR, €",
            "UAH, ₴"
        ],
        currency: "USD, $",

        showPersonMenu: true,
      }
    },

  methods: {
    togglePersonMenu() {
      this.showPersonMenu = !this.showPersonMenu;
    }
  }

}
</script>

<style scoped lang="scss">

  .wrap {
    display: block;
  }

  .bi-person-circle {
    display: none;
    font-size: 1.8rem;
  }

  .active-wrap {
    display: block !important;
    //right: 0!important;
    transform: translateX(-150px);
    transition-property: transform;
    transition-delay: 500ms;
    transition-duration: 2s;
    transition-timing-function: linear;
  }



  @media (max-width: 767.9px) {
    .wrap {
      display: none;
      //width: 150px;
      padding: 15px 20px;
      position: absolute;
      top: 37px;
      right: -150px;
      z-index: 10;
      background-color: #6c757d;
      color: #f8f9fa;

      //transition-property: right;
      //transition-delay: 100ms;
      //transition-duration: 1s;
      //transition-timing-function: linear;
      .person-link {
        display: block;
        margin: 0 10px;
      }
      span {
        display: none;
      }
    }

    .bi-person-circle {
      display: block;
    }
  }
</style>