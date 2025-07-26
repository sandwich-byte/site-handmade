<template>
    <Layout>
        <Title />
        <div class="bg-leaves">
            <Producers />
            <ProductList />
        </div>
    </Layout>
</template>

<script setup>
import Layout from './Layout.vue';
import ProductList from '@/components/ProductList.vue';
import Producers from '@/components/Producers.vue';
import Title from '@/components/Title.vue';
</script>

<style scoped>
.bg-leaves {
    background-image: url("/bg-left.png"), url("/bg-right.png");
    background-position: bottom left, top right;
    background-repeat: no-repeat;

    background-size: 50%;
}
</style>