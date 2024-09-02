<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="Название товара" required />
    <input v-model="seller" placeholder="Продавец" required />
    <select v-model="integration">
      <option value="reels">Reels</option>
      <option value="stories">Stories</option>
    </select>
    
    <button type="submit">Добавить товар</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Product } from "../types/Product";

export default defineComponent({
  setup(_, { emit }) {
    const name = ref("");
    const seller = ref("");
    const integration = ref("reels");

    const submitForm = () => {
      const product: Product = {
        id: Date.now(),
        name: name.value,
        seller: seller.value,
        integration: integration.value,
      };
      emit("add-product", product);
      resetForm();
    };

    const resetForm = () => {
      name.value = "";
      seller.value = "";
      integration.value = "reels";
    };

    return { name, seller, integration, submitForm };
  },
});
</script>
