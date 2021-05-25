<template>
    <article class="card" style="width: 18rem;">
      <img :src="product.avatar" class="card-img-top" :alt="product.name">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.info }}</p>
        <router-link to="#" tag="a" class="btn btn-primary">more...</router-link>
      </div>
    </article>
</template>

<script>
export default {
  name: "Card",

  props: {
    product: Object,
  },
}
</script>

<style scoped>

</style>