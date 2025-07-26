<template>
    <section class="container">
        <h2 class="headline">Producători internaționali</h2>
        <ul class="lista">
            <li>
                <div class="prod">
                    <img class="image" src="/USA.png">
                    <img class="stars" src="/Stars.png" alt="5 stars">
                    <a href="#">
                        <p class="name">J.Paul</p>
                        <p class="country">USA</p>
                    </a>

                </div>
            </li>

            <li>
                <div class="prod">
                    <img class="image" src="/Romania.png">
                    <img class="stars" src="/Stars.png" alt="5 stars">

                    <a href="#">
                        <p class="name">C. Sergiu</p>
                        <p class="country">Romania</p>
                    </a>

                </div>
            </li>
            <li>
                <div class="prod">
                    <img class="image" src="/Germany.png">
                    <img class="stars" src="/Stars.png" alt="5 stars">
                    <a href="#">
                        <p class="name">A. Baggye</p>
                        <p class="country">Germany</p>
                    </a>

                </div>

            </li>
            <li>
                <div class="prod">

                    <img class="image" src="/Poland.png">
                    <img class="stars" src="/Stars.png" alt="5 stars">

                    <a href="#">
                        <p class="name">M. Clarice</p>
                        <p class="country">Poland</p>
                    </a>
                </div>

            </li>
        </ul>
    </section>
</template>

<script setup>

</script>

<style scoped>
.producator {
    display: flex;
    gap: 8px;
    font-weight: 700;
    color: white;
    font-size: 18px;
    align-items: center;
    margin: 0 0 16px 0;
}

.headline {
    color: white;
    font-weight: 400;
    font-style: normal;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 48px;
    font-size: 64px;
    margin-top: 219px;

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

.producator img {
    width: 32px;
    height: 32px;

}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.lista {
    display: flex;
    justify-content: space-between;
    border-radius: 8px;

}



.lista li a {
    text-decoration: none;
}


.lista li {
    align-items: flex-start;
    flex-wrap: nowrap;
}

.prod {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 280px;
    height: 444px;

}

.stars {
    width: 182px;
    height: 32px;
    margin: 22px;

}




.lista li div a p {
    font-family: "Inria Serif";
    font-weight: 400;
    width: 280px;
    height: 38px;
    font-size: 32px;

}

.name {
    color: white;
    margin: 22px;


}

.country {
    color: #FFFFFF80;
    margin: 22px;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.container {
    width: 1216px;
    margin: 0 auto;
}
</style>