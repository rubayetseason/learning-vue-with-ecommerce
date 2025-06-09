<script setup lang="ts">
import { sharedAssets } from "@/assets";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <div class="my-12 max-w-custom w-full h-dvh mx-auto">
    <div
      class="absolute top-0 right-0 h-[100vh] w-[40%] bg-primary-foreground z-[-1]"
    ></div>
    <div class="flex">
      <div class="flex items-center flex-1">
        <div>
          <h1 class="text-8xl">Desire Meets</h1>
          <h1 class="ml-32 text-8xl">New Style</h1>
          <p class="mt-12 text-lg">
            Any one can get dressed up with glamour on special days, <br />
            but it is how people dress on daily basis that speaks.
          </p>
          <button
            class="mt-12 px-8 py-3 text-white text-lg bg-foreground flex items-center gap-2 rounded-[30px]"
          >
            See All <ArrowRight :size="23" class="text-white" />
          </button>
        </div>
      </div>
      <div class="relative flex-1">
        <img :src="sharedAssets.images.hero1" alt="hero1" class="w-2/3" />
        <img
          :src="sharedAssets.images.hero2"
          alt="hero2"
          class="absolute top-1/2 -right-12 -translate-y-1/2 h-[65%] w-1/2 rounded-t-[45%]"
        />
      </div>
    </div>
  </div>
</template>
