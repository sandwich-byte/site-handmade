<template>
  <div class="bg-leaves">


    <div class="container produse">

      <Product></Product>
      <Product></Product>
      <Product></Product>

    </div>
  </div>
</template>


<script setup>
import Product from './Product.vue';
</script>

<style scoped>
.produs img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.product-info h3 {
  font-size: 16px;
  font-weight: 700;
  color: #2E2917;
}

.product-info p {
  margin-top: 8px;
  color: #5B4701;

}

.product-info {
  margin-top: 16px;
}

.img-container {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
</style>