<script setup lang="ts">
import { sharedAssets } from "@/assets";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MoveRight,
  ArrowRight,
} from "lucide-vue-next";

const aboutRoutes = [
  {
    route: "/",
    label: "Our Company",
  },
  {
    route: "/",
    label: "Our Products",
  },
  {
    route: "/",
    label: "Our Blogs",
  },
  {
    route: "/",
    label: "About Us",
  },
];

const supportRoutes = [
  {
    route: "/",
    label: "Terms & Conditions",
  },
  {
    route: "/",
    label: "Privacy Policy",
  },
  {
    route: "/",
    label: "Call Support",
  },
  {
    route: "/",
    label: "FAQs",
  },
];
</script>

<template>
  <footer class="relative mt-64 bg-foreground">
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-custom w-full mx-auto py-10 grid grid-cols-4 gap-10">
      <div>
        <img :src="sharedAssets?.images?.footer_1" alt="footer_1" class="w-full" />
      </div>
      <div>
        <img :src="sharedAssets?.images?.footer_2" alt="footer_2" class="w-full" />
      </div>
      <div>
        <img :src="sharedAssets?.images?.footer_3" alt="footer_3" class="w-full" />
      </div>
      <div class="size-full text-white bg-card flex flex-col justify-center items-center gap-6">
        <Instagram :size="40" stroke-width="1.5" />
        <h1 class="text-xl">Join our Instagram</h1>
        <MoveRight :size="40" stroke-width="1" />
      </div>
    </div>
    <div class="pt-72 pb-32 max-w-custom w-full mx-auto text-white grid grid-cols-4 gap-2">
      <div>
        <div class="flex items-center gap-1">
          <img :src="sharedAssets?.icons?.logoWithoutBg" alt="logo" class="w-12" />
          <h1 class="text-3xl font-semibold italic">Exellee</h1>
        </div>
        <div class="mt-7 font-extralight space-y-2">
          <h1>+880 1978 258725</h1>
          <h1>ABC Street, Random Street</h1>
          <h1>California, 8979901</h1>
        </div>

        <div class="mt-7 flex gap-3">
          <Facebook :size="25" stroke-width="1.5" />
          <Instagram :size="25" stroke-width="1.5" />
          <Twitter :size="25" stroke-width="1.5" />
          <Youtube :size="25" stroke-width="1.5" />
        </div>
      </div>
      <div>
        <h1 class="text-xl font-medium">About</h1>
        <div class="mt-8 flex flex-col gap-2">
          <RouterLink v-for="link in aboutRoutes" :key="link.route + link.label" :to="link.route"
            class="my-1 text-base hover:underline">
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
      <div>
        <h1 class="text-xl font-medium">Support</h1>
        <div class="mt-8 flex flex-col gap-2">
          <RouterLink v-for="link in supportRoutes" :key="link.route + link.label" :to="link.route"
            class="my-1 text-base hover:underline">
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
      <div>
        <h1 class="text-xl font-medium">Subscribe Newsletter</h1>
        <h1 class="mt-8 text-gray-200 font-extralight">
          New Customer Get 50% Off...
        </h1>
        <div class="mt-5 pr-1.5 pl-3 bg-gray-200 flex items-center gap-2">
          <input type="text" class="py-3 w-full text-gray-700 outline-none" placeholder="Email Address..." />
          <div class="p-1.5 bg-card">
            <ArrowRight :size="25" class="text-white" />
          </div>
        </div>
      </div>
    </div>
    <div class="pb-7 max-w-custom w-full mx-auto text-gray-200 flex justify-between items-center">
      <h1 class="text-xs">Copyright © 2025 Exellee. All Rights Reserved</h1>
      <div>
        <h1 class="text-xs">Terms</h1>
      </div>
    </div>
  </footer>
</template>
