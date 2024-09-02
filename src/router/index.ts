import { createRouter, createWebHashHistory } from "vue-router";
import ProductList from "../components/ProductList.vue";

const routes = [
  {
    path: "/:page(\\d+)?", 
    component: ProductList,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
