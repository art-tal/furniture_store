<template>

    <article class="card w-100 mb-5" @click="goToView(productType.slug, productType.typeName)">
      <img :src="getPreview" class="card-img-top" :alt="productType.typeName">
      <div class="card-body">
        <h4 class="card-text text-center">{{productType.typeName}}</h4>
      </div>
    </article>

</template>

<script>
export default {
  name: "CardProductType",
  props: {
    productType: Object
  },

  data() {
    return {

    }
  },

  computed: {
    getPreview() {
      if (this.productType.preview) {
        return require(`../assets/image/${this.productType.preview}`);
      } else {
        return require(`../assets/image/die_hard-1500x837.jpg`);
      }

    }
  },

  created() {
    // console.log(this.productType);
  },

  methods: {
    goToView(slug, name) {
      console.log( slug, name);
      this.$router.push({
        name: "gallery",
        params: {slug: slug, name: name}
      });
    }

  },
}
</script>

<style scoped lang="scss">
  .card {
    img.card-img-top {
      height: 200px;
      object-fit: contain;
    }
  }

</style>