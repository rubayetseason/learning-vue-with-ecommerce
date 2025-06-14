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
import { ShoppingBag } from "lucide-vue-next";

const products = ref<IProductType[]>([]);
const loading = ref(true);

const fetchProducts = async () => {
  try {
    const res = await axiosInstance.get("/products?limit=10");
    products.value = res.data;
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
        class="w-full max-w-custom mx-auto"
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent class="-ml-1">
          <CarouselItem
            v-for="(product, index) in products"
            :key="index"
            class="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <Card class="bg-foreground text-primary-foreground">
              <CardContent class="h-80 flex flex-col justify-between">
                <h1 class="text-9xl font-semibold">{{ index + 1 }}</h1>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div>
</template>
