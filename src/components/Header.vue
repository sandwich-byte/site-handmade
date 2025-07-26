<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
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
        <img src="cos.png">
        <button>Sign up</button>
        <button>Log in</button>

      </div>

    </header>
    <div class="menu">
      <a href="bijuterii.html">Bijuterii</a>
      <a href="decoratiuni.html">Decorațiuni interioare</a>
      <a href="imbracaminte.html">Îmbrăcăminte</a>
      <a href="accesorii">Accesorii</a>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  background-color: white;
  padding-bottom: 35px;
  padding-top: 24px;
}

.search-bar {
  width: 550px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  border-radius: 45px;
  padding: 10px;
  border-color: #E2C3A5;
}

.search-bar input {
  width: 679px;
  border: none;


}

input:focus {
  outline: none;
}

.search-bar svg {
  width: 28px;
  height: 24px;
}

.user-button img {
  width: 32px;
  height: 32px;
  margin-right: 20px;
  margin-left: 10px;
}

.user-button {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-button1 img {
  width: 32px;
  height: 32px;
  padding: 10px;
}

.menu {
  width: 30%;
  margin: auto;
  margin-top: 35px;
  display: flex;
  gap: 32px;
  text-decoration: none;
  font-family: "Inria Serif", serif;
  color: #2E2917;

}


.menu a {
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Inria Serif';
  text-wrap: nowrap;
}


.container {
  width: 1216px;
  margin: 0 auto;
}

.logo {
  width: 177px;
  height: 73px;
  background-image: url(Frame\ 29.png);
  background-size: cover;
}
</style>