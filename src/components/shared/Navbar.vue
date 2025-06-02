<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="flex gap-6 p-4 bg-gray-100 border-2 border-red-500 shadow">
    <RouterLink to="/" class="hover:underline">Home</RouterLink>
    <RouterLink to="/products" class="hover:underline">Products</RouterLink>
    <RouterLink to="/categories" class="hover:underline">Categories</RouterLink>
    <RouterLink to="/cart" class="hover:underline">Cart</RouterLink>
    <RouterLink to="/auth" class="hover:underline">Auth</RouterLink>
  </nav>
</template>
