<template>
    <Layout>
        <Title />
        <div class="bg-leaves">
            <h2 class="headline">Favoritele mele</h2>
            <ProductList />
        </div>
    </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import ProductList from '@/components/ProductList.vue';

</script>

<style scoped>
.bg-leaves {
    background-image: url("/bg-left.png"), url("/bg-right.png");
    background-position: bottom left, top right;
    background-repeat: no-repeat;

    background-size: 50%;
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
</style>