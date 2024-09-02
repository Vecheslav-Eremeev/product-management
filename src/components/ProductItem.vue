<template>
  <div class="product-card">
    <h3>{{ product.name }}</h3>
    <p>Продавец: {{ product.seller }}</p>
    <p>Интеграция: {{ product.integration }}</p>
    
    <div class="button-container">
      <button @click="editProduct">Редактировать</button>
      <button @click="deleteProduct">Удалить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "../types/Product";

export default defineComponent({
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
    onEdit: {
      type: Function,
      required: true,
    },
    onDelete: {
      type: Function,
      required: true,
    },
  },
  methods: {
    editProduct() {
      this.onEdit(this.product);
    },
    deleteProduct() {
      this.onDelete(this.product.id);
    },
  },
});
</script>
