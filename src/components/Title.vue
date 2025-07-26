<template>
    <section>
        <div class="img-hero">
            <img class="background" src="/Handmade.jpg" alt="Handmade" usemap="#handmademap">
            <div class="hero-overlay">
                <h1 class="header">
                    Bine ai venit la HNDMD!
                </h1>
                <p class="description">
                    Făcut manual. Cu suflet. Pentru tine.<br>
                    La HNDMD găsești creații unice, lucrate de mână, cu grijă și pasiune. Fiecare obiect e gândit să
                    spună ceva — despre tine, despre stilul tău, despre ce simți. <br>
                    Handmade. Heartmade. HNDMD.
                </p>
            </div>
        </div>

        <map name="handmademap">

            <area target="_blank" alt="Vase" title="Vase" href="https://youtu.be/S0yHmg1fdWQ?si=uN5OWx9tl_BDHiTQ"
                coords="232,790,249,843,286,878,174,878,163,785,181,780,203,783" shape="poly">

            <area target="_blank" alt="Carpet" title="Carpet" href="https://youtu.be/NIbTPTSMCR0?si=dhBFRGKZXIojqlmI"
                coords="318,543,202,565,483,880,550,878,1042,705,1028,673,920,626,847,607,811,576,771,576,766,712,661,654,571,666,554,543,522,510,486,522,510,560,489,590,432,602,398,614,301,597"
                shape="poly">

            <area target="_blank" alt="Pillow" title="Pillow" href="https://youtu.be/kx2Pmu2nrbg?si=sDQO1goJSUntYpt2"
                coords="850,345,857,386,913,369,872,442,766,421,738,416,747,343" shape="poly">

            <area target="_blank" alt="Pillow" title="Pillow" href="https://youtu.be/kx2Pmu2nrbg?si=sDQO1goJSUntYpt2"
                coords="1020,360,1116,415,1109,457,1018,477,998,489,960,469" shape="poly">

            <area target="_blank" alt="Blanket" title="Blanket" href="https://youtu.be/_ZkhD3c_sac?si=-RBmKYeHKMQA70bw"
                coords="357,522,479,523,491,549,500,562,479,583,401,611,305,588,318,549" shape="poly">

            <area target="_blank" alt="Blanket" title="Blanket" href="https://youtu.be/_ZkhD3c_sac?si=-RBmKYeHKMQA70bw"
                coords="576,427,652,409,760,421,813,434,879,450,796,461,686,465" shape="poly">

            <area target="_blank" alt="Blanket" title="Blanket" href="https://youtu.be/_ZkhD3c_sac?si=-RBmKYeHKMQA70bw"
                coords="882,548,839,572,841,594,1021,659,1059,529,1116,510,1224,415,1187,401,1063,383,1122,416,1119,457,1005,494,941,466,872,483,853,496,853,508,852,522"
                shape="poly">

            <area target="_blank" alt="Tablecloth" title="Tablecloth"
                href="https://youtu.be/fg7qRWOsT1o?si=PZd2WEt-XnqSBuR2"
                coords="1076,537,1130,517,1184,517,1253,517,1255,552,1255,580,1197,605,1174,627,1106,617,1048,605"
                shape="poly">

            <area target="_blank" alt="Bowl" title="Bowl" href="https://youtu.be/xPgPKRuFia4?si=eY4AberCjFapWm4W"
                coords="1792,559,1866,581,1877,601,1855,611,1821,620,1797,633,1758,630,1743,601,1692,581,1706,553,1723,548"
                shape="poly">

            <area target="_blank" alt="Basket" title="Basket" href="https://youtu.be/SpYqs_ry_1I?si=29-4T4k6Yj3LJBeP"
                coords="644,522,623,543,671,576,783,558,783,517,696,551" shape="poly">
        </map>
    </section>
</template>

<script setup>

</script>

<style scoped>
.handmade {
    position: relative;
    height: auto;
    width: 100%;
    overflow: hidden;
}


.img-hero {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-overlay p {
    color: white;
    font-size: 32px;
    font-weight: 300 !important;
    letter-spacing: 0%;
    line-height: 100%;
    margin-top: 16px;
    opacity: .8;
}

.background {
    width: 100%;
    height: 800px;
    object-fit: cover;
    object-position: center center;
}

.hero-overlay {
    position: absolute;
    background-color: #4E1C0899;
    max-width: 703px;
    border-radius: 8px;
    z-index: 10;
    padding: 56px;
    font-family: "Inria Serif";
    align-items: center;
}
</style>