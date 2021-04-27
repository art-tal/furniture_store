<template>
  <div class="container-fluid bg-dark mx-0 px-0 py-2 text-secondary">
    <div class="container d-flex">
<!--      <div class="row">-->
        <div class="mr-4">
          <label for="choice" class="mr-2 mb-0">Language:</label>
          <select id="choice" name="languages" v-model="language">
            <option v-for="(lang, key) in languages"
                    :key="key"
                    :value="lang"
                    selected>{{ lang }}</option>

          </select>
        </div>
        <div class="mr-4">
          <label for="currency" class="mr-2 mb-0">Currency:</label>
          <select name="currency" id="currency" v-model="currency">
          <option v-for="(cur, key) in currencys"
                  :key="key"
                  :value="cur">{{cur}}</option>
        </select>
        </div>
        <div class="flex-grow-1 text-right">
          <router-link to="/" class="text-white">Account</router-link>
          <span class="mx-3">|</span>
          <router-link to="/" class="text-white">Wishlist</router-link>
          <span class="mx-3">|</span>
          <router-link to="/" class="text-white">Log In</router-link>
          <span class="mx-3">|</span>
          <router-link to="/" class="text-white">Sign Up</router-link>
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
        currency: "USD, $"
      }
    }

}
</script>

<style scoped>

</style>