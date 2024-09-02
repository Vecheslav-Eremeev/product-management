<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal">
      <h2 class="modal-title">Редактировать товар</h2>

      <form @submit.prevent="submitForm">
        <input
          v-model="localProduct.name"
          placeholder="Название товара"
          required
        />
        <input v-model="localProduct.seller" placeholder="Продавец" required />
        <select v-model="localProduct.integration">
          <option value="reels">Reels</option>
          <option value="stories">Stories</option>
        </select>
        
        <button type="submit">Сохранить</button>
        <button type="button" @click="close">Закрыть</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Product } from "../types/Product";

export default defineComponent({
  props: {
    product: {
      type: Object as () => Product | null,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update-product", "close"],
  setup(props, { emit }) {
    const localProduct = ref<Product>({
      id: props.product?.id || 0,
      name: props.product?.name || "",
      seller: props.product?.seller || "",
      integration: props.product?.integration || "",
    });

    watch(
      () => props.product,
      (newProduct) => {
        if (newProduct) {
          localProduct.value = { ...newProduct };
        } else {
          localProduct.value = {
            id: 0,
            name: "",
            seller: "",
            integration: "",
          };
        }
      }
    );

    const submitForm = () => {
      if (localProduct.value) {
        emit("update-product", localProduct.value);
      }
      close();
    };

    const close = () => {
      emit("close");
    };

    return { localProduct, submitForm, close };
  },
});
</script>
