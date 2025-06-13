<script setup lang="ts">
import { sharedAssets } from "@/assets";
import {
  getIconColor,
  getNavLinkColor,
  getUnderlineClass
} from "@/helpers/classNames";
import { Heart, Search, ShoppingBag } from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/categories", label: "Categories" },
  { to: "/auth", label: "Sign In" },
];
</script>

<template>
  <div
    class="sticky top-3 w-[80%] mx-auto rounded-[60px] z-10 transition-colors duration-300"
    :class="[scrolled ? 'bg-foreground shadow-md' : 'bg-transparent']"
  >
    <nav
      class="relative max-w-custom w-full h-[75px] mx-auto flex justify-between items-center"
    >
      <!-- Navigation Links -->
      <div class="text-lg font-medium flex items-center gap-5">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="group relative px-2 py-1 text-lg"
          :class="getNavLinkColor(scrolled, route.path === link.to)"
        >
          <span :class="getUnderlineClass(scrolled, route.path === link.to)">
            {{ link.label }}
          </span>
        </RouterLink>
      </div>

      <!-- Logo -->
      <div>
        <img
          :src="sharedAssets.icons.logoWithoutBg"
          alt="Logo"
          class="absolute top-10 left-1/2 -translate-y-1/2 w-20"
        />
      </div>

      <!-- Action Icons -->
      <div class="flex items-center gap-5">
        <Search
          :class="getIconColor(scrolled)"
          :size="23"
          :stroke-width="route.path === '/search' ? 2.5 : 1.5"
        />
        <Heart
          :class="getIconColor(scrolled)"
          :size="23"
          :stroke-width="route.path === '/wishlist' ? 2 : 1.5"
        />
        <ShoppingBag
          :class="getIconColor(scrolled)"
          :size="23"
          :stroke-width="route.path === '/cart' ? 2 : 1.5"
        />
      </div>
    </nav>
  </div>
</template>
