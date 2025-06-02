import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import ProductsPage from "@/pages/ProductsPage.vue";
import CategoryPage from "@/pages/CategoryPage.vue";
import CartPage from "@/pages/CartPage.vue";
import AuthPage from "@/pages/AuthPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/products", name: "Products", component: ProductsPage },
  { path: "/categories", name: "Categories", component: CategoryPage },
  { path: "/cart", name: "Cart", component: CartPage },
  { path: "/auth", name: "Auth", component: AuthPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
