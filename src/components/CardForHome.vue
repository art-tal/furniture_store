<template>
    <article class="card position-relative w-100 h-100" style="width: 18rem;">
      <img :src="getAvatar" class="card-img-top" :alt="product.name">
<!--      <img src="../assets/image/cabinet.png" class="card-img-top" :alt="product.name">-->
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.info }}</p>
        <router-link to="#" tag="button" class="btn btn-outline-secondary">more &#x203A;</router-link>
      </div>
      <img src="../assets/image/new.png" alt="new" class="new position-absolute" v-if="newProduct">
      <img src="../assets/image/sale.png" alt="new" class="sale position-absolute" v-if="product.sale">
    </article>
</template>

<script>
export default {
  name: "Card",

  props: {
    product: Object,
  },

  computed: {
    getAvatar() {
      return require('../assets/image/' + this.product.avatar);
    },
    newProduct() {
      if (new Date - this.product.date < 1000 * 60 * 60 * 24 * 60) { return true; }
      else { return false; }
    },
  },
}
</script>

<style scoped lang="scss">

.card {
  img.card-img-top {
    height: 250px;
    object-fit: contain;
  }
  .card-body {
    .btn.btn-outline-secondary {
      font-size: 1.4rem;
      padding: 1px 5px;
    }
  }
}

.new {
  top: -5px;
  right: -4px;
}

.sale {
  top: -4px;
  left: -3px;
}

</style>