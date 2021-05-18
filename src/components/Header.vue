<template>
  <header class="before_nav container-fluid bg-dark mx-0 px-0 py-2 text-secondary">
    <div class="container d-flex">
        <div class="mr-4">
          <label for="choice" class="mr-2 mb-0">Language:</label>
          <select id="choice"
                  name="languages"
                  v-model="language"
                  class="bg-dark text-light border-0">
            <option v-for="(lang, key) in languages"
                    :key="key"
                    :value="lang"><span class="option">{{ lang }}</span></option>

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
          <div class="wrap"
               :class="showPersonMenu ? 'disable-wrap' : 'active-wrap'"
          >
            <router-link to="/" class="person-link text-white">Account</router-link>
            <span class="mx-3">|</span>
            <router-link to="/" class="person-link text-white">Wishlist</router-link>
            <span class="mx-3">|</span>
            <router-link to="/" class="person-link text-white">Log In</router-link>
            <span class="mx-3">|</span>
            <router-link to="/" class="person-link text-white">Sign Up</router-link>
          </div>

        </div>
    </div>

  </header>
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

@keyframes show {
  from {
    right: -150px;
  }
  to {
    right: 0px;
  }
}

@keyframes hide {
  from {
    right: 0;
  }
  to {
    right: -150px;
    display: none;
  }
}

  .wrap {
    display: block;
    width: 100%;
  }

  .active-wrap {
    display: block !important;
    animation: show 1s;
    animation-fill-mode: forwards;
  }
  .disable-wrap {
    animation: hide 1s;
    animation-fill-mode: forwards;
  }

  .bi-person-circle {
    display: none;
    font-size: 1.8rem;
  }




  @media (max-width: 991.9px) {
    .wrap {
      width: 150px;
      padding: 15px 20px;
      position: absolute;
      top: 37px;
      right: -150px;
      z-index: 10;
      background-color: #6c757d;
      color: #f8f9fa;

      .person-link {
        display: block;
        margin: 15px;
        font-size: 2rem;
        &:hover {
          font-weight: bold;
        }
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