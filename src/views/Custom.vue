<template>
  <section class="container-fluid py-5">
    <div class="container">
      <h2 class="text-center mb-5">We also produce custom-made furniture according to your size and your desires.</h2>
      <div class="row  align-items-stretch">
        <div class="col-3 "
             v-for="(productType, key) in types"
             :key="key"
        >
            <card :product-type="productType" />
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import Card from "@/components/CardProductType";

export default {
  name: "Catalog",
  components: {
    Card,
  },

  data() {
    return {
      types: [
        {
          typeName: "Kitchen",
          preview: "",
        },
        {
          typeName: "Desks",
          preview: "desk.png",
        },
        {
          typeName: "Sliding",
          preview: "Sliding.jpg"
        },
        {
          typeName: "Children`s room",
          preview: ""
        },
        {
          typeName: "Cabinet",
          preview: "cabinet.png"
        },
        {
          typeName: "Hallway",
          preview: ""
        },
        {
          typeName: "Bed",
          preview: ""
        }
      ],
    }
  },
}
</script>

<style scoped lang="scss">

</style>