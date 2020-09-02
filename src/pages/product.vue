<template>
  <div class="product">
    <product-param v-bind:title="'product.name'">
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
  </div>
</template>

<script>
import ProductParam from "../components/ProductParam";
export default {
  name: "product",
  components:{
    ProductParam
  }
}
</script>

<style lang="scss">
button{
  margin-left:10px;
}
</style>