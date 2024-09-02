import { defineStore } from "pinia";
import { Product } from "../types/Product";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: JSON.parse(localStorage.getItem("products") || "[]") as Product[],
    itemsPerPage: 20,
    filter: "",
    sortOrder: "asc", 
    filteredProducts: [] as Product[], 
    sortedProducts: [] as Product[], 
  }),
  actions: {
    addProduct(product: Product) {
      this.products.push(product);
      this.saveProducts();
    },
    editProduct(updatedProduct: Product) {
      const index = this.products.findIndex((p) => p.id === updatedProduct.id);
      if (index !== -1) {
        this.products[index] = updatedProduct;
        this.saveProducts();
      }
    },
    deleteProduct(id: number) {
      this.products = this.products.filter((product) => product.id !== id);
      this.saveProducts();
    },
    saveProducts() {
      localStorage.setItem("products", JSON.stringify(this.products));
    },
    setFilter(filter: string) {
      this.filter = filter;
    },
    setSortOrder(order: "asc" | "desc") {
      this.sortOrder = order;
    },
  },
  getters: {
    filteredProducts: (state): Product[] => {
      return state.products.filter((product) =>
        product.integration.includes(state.filter)
      );
    },
    sortedProducts: (state): Product[] => {
      return [...state.filteredProducts].sort((a, b) => {
        if (state.sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    },
    paginatedProducts: (state) => {
      return (page: number) => {
        const start = (page - 1) * state.itemsPerPage;
        return state.sortedProducts.slice(start, start + state.itemsPerPage);
      };
    },
    totalPages: (state): number => {
      return Math.ceil(state.sortedProducts.length / state.itemsPerPage);
    },
  },
});
