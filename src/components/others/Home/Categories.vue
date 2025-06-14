<script setup lang="ts">
import { ref, onMounted } from "vue";
import { axiosInstance } from "@/lib/axios";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ICategoryType } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag } from "lucide-vue-next";

const categories = ref<ICategoryType[]>([]);
const loading = ref(true);

const fetchCategories = async () => {
  try {
    const res = await axiosInstance.get("/products/categories");
    categories.value = res.data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchCategories();
});
</script>

<template>
  <div class="mt-32 px-6 py-4 w-full max-w-custom mx-auto">
    <h1 class="mb-12 text-4xl font-bold">Our Categories</h1>
    <!--  -->
    <!-- Skeleton Loader Cards -->
    <div v-if="loading" class="w-full">
      <div class="flex gap-2">
        <div v-for="i in 3" :key="i" class="md:basis-1/2 lg:basis-1/3">
          <Skeleton class="aspect-square w-full rounded-lg animate-pulse" />
        </div>
      </div>
    </div>

    <!-- ShadCN Carousel -->
    <Carousel
      class="relative w-full max-w-custom mx-auto"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent class="-ml-1">
        <CarouselItem
          v-for="(category, index) in categories"
          :key="category?.slug"
          class="pl-1 md:basis-1/2 lg:basis-1/3"
        >
          <Card class="bg-foreground text-primary-foreground">
            <CardContent class="h-80 flex flex-col justify-between">
              <h1 class="text-9xl font-semibold">{{ index + 1 }}</h1>
              <div class="w-full flex justify-between items-center">
                <span class="text-2xl font-semibold">{{ category?.name }}</span>
                <ShoppingBag
                  :size="60"
                  class="text-primary-foreground"
                  stroke-width="1"
                />
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <div class="absolute -top-[70px] right-12 flex itemes-center justify-end">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  </div>
</template>
