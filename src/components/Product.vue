<template>
    <div>
        <div class="producator">
          <img src="/producator.png"></img>
          <span>Irina Cojocari</span>
        </div>

        <div class="produs">
          <div class="img-container">
            <img src="/Rectangle 15.png">

            <div class="price-tag">
              250MDL
            </div>

            <div class="favorites">
              <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.89062 4.49951C3.72859 1.36158 7.81221 0.275028 11.0107 2.09521L13.0049 3.23096L13.5 3.51221L13.9941 3.23096L15.9893 2.09521C19.1878 0.275028 23.2714 1.36158 25.1094 4.49951C26.6124 7.06588 26.182 10.3077 24.0518 12.4077L17.0098 19.3481C15.0631 21.2669 11.9369 21.2669 9.99023 19.3481L2.94824 12.4077C0.818031 10.3077 0.387561 7.06587 1.89062 4.49951Z"
                  stroke="#2E2917" stroke-width="2" />
              </svg>

            </div>

          </div>
          <div class="product-info">
            <h3>Suport handmade din lemn</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
    </div>
</template>

<script setup>




</script>

<style scoped>
.produs {
    background-color: #F2E4B3;
    width: 280px;
    height: 413px;
    border-radius: 16px;
    overflow: hidden;
    padding: 16px;
}

.producator {
    display: flex;
    gap: 8px;
    font-weight: 700;
    color: white;
    font-size: 18px;
    align-items: center;
    margin: 0 0 16px 0;

}

.producator img {
    width: 32px;
    height: 32px;
}

.img-container {
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}

.img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.price-tag {
    background-color: white;
    padding: 8px 16px;
    font-size: 18px;
    font-weight: 700;
    color: black;
    position: absolute;
    right: 8px;
    bottom: 8px;
    border-radius: 6px;
}

.favorites {
    height: 44px;
    width: 44px;
    background-color: #E2C3A5;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
}

.favorites svg {
    width: 29px;
}

.product-info h3 {
    font-size: 16px;
    font-weight: 700;
    color: #2E2917;
    margin-top: 16px;
}

.product-info p {
    margin-top: 8px;
    color: #5B4701;
    font-family: 'Advent Pro';
}
</style>