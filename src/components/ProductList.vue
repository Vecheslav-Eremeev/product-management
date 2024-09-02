<template>
  <div>
    <ProductForm @add-product="addProduct" />
    <div class="select-container">
      <select
        v-model="integration"
        @change="updateFilter"
        class="styled-select"
      >
        <option value="">Все</option>
        <option value="reels">Reels</option>
        <option value="stories">Stories</option>
      </select>

      <select
        v-model="productStore.sortOrder"
        @change="updateSortOrder"
        class="styled-select"
      >
        <option value="asc">Сортировать по возрастанию</option>
        <option value="desc">Сортировать по убыванию</option>
      </select>
    </div>

    <div class="product-list">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        :onEdit="openEditModal"
        :onDelete="deleteProduct"
      />
    </div>

    <Pagination
      :total="totalPages"
      :current-page="currentPage"
      @page-changed="changePage"
    />
    
    <EditProductModal
      v-if="isModalVisible"
      :product="
        selectedProduct || { id: 0, name: '', seller: '', integration: '' }
      "
      :isVisible="isModalVisible"
      @update-product="editProduct"
      @close="closeEditModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "../stores/productStore";
import ProductForm from "./ProductForm.vue";
import ProductItem from "./ProductItem.vue";
import EditProductModal from "./EditProductModal.vue";
import Pagination from "./Pagination.vue";
import { Product } from "../types/Product";

export default defineComponent({
  components: { ProductForm, ProductItem, EditProductModal, Pagination },
  setup() {
    const productStore = useProductStore();
    const route = useRoute();
    const router = useRouter();
    const isModalVisible = ref(false);
    const selectedProduct = ref<Product | null>(null);
    const integration = ref("");

    const currentPage = computed(() => {
      return parseInt(route.params.page as string) || 1;
    });

    const products = computed(() => {
      return productStore.paginatedProducts(currentPage.value);
    });

    const totalPages = computed(() => {
      return productStore.totalPages;
    });

    const addProduct = (product: Product) => {
      productStore.addProduct(product);
    };

    const updateFilter = () => {
      productStore.setFilter(integration.value);
    };

    const updateSortOrder = () => {
      productStore.setSortOrder(productStore.sortOrder as "asc" | "desc");
    };

    const openEditModal = (product: Product) => {
      selectedProduct.value = product;
      isModalVisible.value = true;
    };

    const closeEditModal = () => {
      isModalVisible.value = false;
      selectedProduct.value = null;
    };

    const editProduct = (updatedProduct: Product) => {
      productStore.editProduct(updatedProduct);
      closeEditModal();
    };

    const deleteProduct = (id: number) => {
      productStore.deleteProduct(id);
    };

    const changePage = (page: number) => {
      router.push({ path: `/${page}` });
    };

    return {
      products,
      totalPages,
      currentPage,
      addProduct,
      updateFilter,
      updateSortOrder,
      openEditModal,
      closeEditModal,
      editProduct,
      deleteProduct,
      changePage,
      isModalVisible,
      selectedProduct,
      integration,
      productStore,
    };
  },
});
</script>
