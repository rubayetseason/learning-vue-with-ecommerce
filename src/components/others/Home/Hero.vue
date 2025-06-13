<script setup lang="ts">
import { sharedAssets } from "@/assets";
import { ArrowRight, MoveDown } from "lucide-vue-next";
</script>

<template>
  <div>
    <div class="mt-12 w-full h-[calc(100vh-140px)] mx-auto">
      <div
        class="absolute top-0 right-0 w-[40%] h-dvh bg-primary-foreground z-[-1]"
      ></div>
      <div class="max-w-custom w-full mx-auto">
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
    </div>
    <div class="flex">
      <div class="w-[60%] flex items-center">
        <img :src="sharedAssets.images.pendant" alt="pendant" class="w-64" />
        <div
          class="w-full h-[85%] text-foreground grid grid-cols-3 bg-primary-foreground"
        >
          <div class="flex flex-col justify-center items-start mx-auto">
            <h1 class="text-6xl font-medium italic">12</h1>
            <h1 class="mt-3 text-base">All Over World</h1>
          </div>
          <div class="flex flex-col justify-center items-start mx-auto">
            <h1 class="text-6xl font-medium italic">300+</h1>
            <h1 class="mt-3 text-base">Products Available</h1>
          </div>
          <div class="flex flex-col justify-center items-start mx-auto">
            <h1 class="text-6xl font-medium italic">1K+</h1>
            <h1 class="mt-3 text-base">Product Reviews</h1>
          </div>
        </div>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <div
          class="mt-7 size-32 mx-auto bg-foreground flex items-center justify-center animate-bounce duration-1000 rounded-full"
        >
          <MoveDown
            :size="50"
            class="text-primary-foreground"
            stroke-width="1"
          />
        </div>
      </div>
    </div>
  </div>
</template>
