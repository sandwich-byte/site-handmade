<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Produs from './components/icons/Produs.vue';
import Favorites from './components/icons/Favorites.vue';
import Cart from './components/icons/Cart.vue';
</script>

<template>
<div class="main-page">
  <!--Navigare-->
  <div class="header-container">
    <header class="container">
      <div class="logo"></div>

      <div class="search-bar">
        <input type="text">
        <!--icon inima-->
        <svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <title>ionicons-v5-f</title>
          <path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"
            style="fill:none;stroke:#000000;stroke-miterlimit:10;stroke-width:32px" />
          <line x1="338.29" y1="338.29" x2="448" y2="448"
            style="fill:none;stroke:#000000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" />
        </svg>
      </div>

      <div class="user-button">
        <svg class="user-button1" width="28" height="23" viewBox="0 0 28 23" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.0053 1.72658L14 2.86177L15.9947 1.72658C19.6633 -0.361163 24.3542 0.87779 26.4722 4.49386C28.208 7.45729 27.708 11.2004 25.2533 13.62L18.2119 20.5607C15.876 22.8632 12.124 22.8632 9.788 20.5607L2.74668 13.62C0.291958 11.2004 -0.207982 7.45729 1.52777 4.49386C3.6458 0.87779 8.33673 -0.361163 12.0053 1.72658Z"
            fill="#B42F2F" />
        </svg>
        <img src="./assets/cos.png">
        <button>Sign up</button>
        <button>Log in</button>

      </div>
    </header>
</div>
</div>
</template>

<style scoped>

</style>
