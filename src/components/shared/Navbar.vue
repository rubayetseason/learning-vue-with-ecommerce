<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { sharedAssets } from "@/assets";
import { Search, Heart, ShoppingBag } from "lucide-vue-next";

const route = useRoute();

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/categories", label: "Categories" },
  { to: "/auth", label: "Sign In" },
];
</script>

<template>
  <nav class="w-full max-w-[1350px] mx-auto flex justify-between items-center">
    <!-- Navigation Links -->
    <div class="text-lg font-medium flex items-center gap-5">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="group relative px-2 py-1 text-lg"
        :class="[
          route.path === link.to
            ? 'font-semibold text-foreground'
            : 'font-medium text-muted-foreground',
        ]"
      >
        <span
          class="after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[3px] after:bg-foreground after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full after:w-[14px]"
          :class="[
            route.path === link.to
              ? 'after:opacity-100'
              : 'after:opacity-0 group-hover:after:opacity-100',
          ]"
        >
          {{ link.label }}
        </span>
      </RouterLink>
    </div>

    <!-- Logo -->
    <div>
      <img :src="sharedAssets.icons.logoWithoutBg" alt="Logo" class="w-24" />
    </div>

    <!-- Cart Items or Placeholder -->
    <div class="flex items-center gap-5">
      <Search
        class="text-foreground"
        :size="23"
        :stroke-width="route.path === '/search' ? 2.5 : 1.5"
      />
      <Heart
        class="text-foreground"
        :size="23"
        :stroke-width="route.path === '/wishlist' ? 2 : 1.5"
      />
      <ShoppingBag
        class="text-foreground"
        :size="23"
        :stroke-width="route.path === '/cart' ? 2 : 1.5"
      />
    </div>
  </nav>
</template>
