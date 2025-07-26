<script setup>
import Product from './Product.vue';

const props = defineProps({
    products:{
        type: Array,
        default: []
    }
})

const emit = defineEmits(['marked-favorite', 'delete-favorite']);

const addedFavorite = (index) => {
    emit('marked-favorite', index);
}

const deleteFavorite = (index) => {
    emit('delete-favorite', index);
}
</script>

<template>
    <div id="products-container">
    <Product v-for="(product, index) in products" :key="index" :product="product" @marked-favorite="() => addedFavorite(index)"
        @delete-favorite="() => deleteFavorite" />
    </div>
</template>

<style scoped>

</style>