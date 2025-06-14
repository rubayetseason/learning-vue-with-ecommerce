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
import type { IProductType } from "@/types";
import { ShoppingBag, Star } from "lucide-vue-next";

const products = ref<IProductType[]>([]);
const loading = ref(true);

const fetchProducts = async () => {
  try {
    const res = await axiosInstance.get("/products?limit=10");
    products.value = res.data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="py-12 mt-32 text-primary-foreground bg-foreground">
    <div
      class="px-6 py-4 w-full max-w-custom mx-auto text-primary-foreground bg-foreground"
    >
      <h1 class="mb-12 text-4xl font-bold">Our Products</h1>

      <!-- Loading State -->
      <div v-if="loading" class="text-muted-foreground text-sm">
        Loading products...
      </div>
      <!-- ShadCN Carousel -->
      <Carousel
        class="relative w-full max-w-custom mx-auto"
        :opts="{
          align: 'start',
          loop: true,
        }"
      >
        <CarouselContent class="-ml-1">
          <CarouselItem
            v-for="(product, index) in products"
            :key="index"
            class="pl-1 md:basis-1/2 lg:basis-1/4"
          >
            <img
              :src="product?.thumbnail"
              :alt="product?.title"
              class="bg-primary-foreground"
            />
            <h2 class="mt-5 text-lg font-medium">{{ product?.title }}</h2>
            <h2 class="mt-2 text-base">$ {{ product?.price }}</h2>
            <!-- Star Rating -->
            <div class="flex items-center gap-1 mt-2">
              <Star
                v-for="n in Math.floor(product?.rating || 0)"
                :key="n"
                class="text-yellow-500 fill-yellow-500"
                :size="16"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <div
          class="absolute -top-[70px] right-12 flex itemes-center justify-end"
        >
          <CarouselPrevious class="bg-foreground" />
          <CarouselNext class="bg-foreground" />
        </div>
      </Carousel>
    </div>
  </div>
</template>
