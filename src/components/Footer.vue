<template>
    <footer>
        <div class="foot container">

            <div class="logo-footer">
                <img src="/logo1.png" alt="logo">
            </div>

            <div class="col">
                <h4>Informatii</h4>
                <p>Întrebări și ajutor</p>
                <p>Tarife și stimulente</p>
                <p>Politica de confidențialitate</p>
                <p>Termeni și condiții</p>
            </div>

            <div class="col">
                <h4>Magazin</h4>
                <p>Bijuterii</p>
                <p>Decorațiuni interioare</p>
                <p>Haine</p>
                <p>Accesorii</p>
            </div>

            <div class="col">
                <h4>Despre</h4>
                <p>Mișcare</p>
                <p>Angajamentul nostru</p>
                <p>Povestea Noastră</p>
            </div>


            <div class="col">

                <div class="social-block">
                    <img src="/facebook.png">
                    <a href="#">Facebook</a>
                </div>
                <div class="social-block">
                    <img src="/instagram.jpg">
                    <a href="#">Instagram</a>
                </div>
                <div class="social-block">
                    <img src="/telegram.jpg">
                    <a href="#">Telegram</a>
                </div>

            </div>
        </div>
    </footer>
</template>


<script setup>
</script>

<style scoped>
footer {
    background-color: #273A17;
    padding: 64px 0;
}

.foot {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

}

.logo-footer img {
    width: 130px;
    height: 130px;
    background-color: white;
    border-radius: 360px;
    padding: 13.76px 32.12px 23.71px 32.88px;
}

.col {
    color: #eee;
    width: 160px;
    height: 114px;
    margin-top: 10px;
    line-height: 25px;
}

.col p {
    font-size: 14px;
}

.col a {
    display: block;
    text-decoration: none;
    color: white;

}

.social {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.social a {
    color: #eee;
    text-decoration: none;
    font-size: 14px;
    display: flex;

    align-items: center;
    gap: 6px;
}

.social-block {
    display: flex;
    font-family: "Inria serif";
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
}


.social-block img {
    width: 22px;
    height: 22px;
    border-radius: 90px;
    margin-right: 10px;
}
</style>