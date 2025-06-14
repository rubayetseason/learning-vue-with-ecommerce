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
    <h1 class="mb-12 text-4xl font-bold">Product Categories</h1>

    <!-- Loading State -->
    <div v-if="loading" class="text-muted-foreground text-sm">
      Loading categories...
    </div>

    <!-- ShadCN Carousel -->
    <Carousel
      class="w-full max-w-custom mx-auto"
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
