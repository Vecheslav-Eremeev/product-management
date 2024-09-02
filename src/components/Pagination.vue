<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="isFirstPage">Назад</button>
    <span class="page-info">Страница {{ currentPage }} из {{ total }}</span>
    <button @click="nextPage" :disabled="isLastPage">Вперед</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isFirstPage() {
      return this.currentPage === 1;
    },
    isLastPage() {
      return this.currentPage >= this.total;
    },
  },
  methods: {
    prevPage() {
      if (!this.isFirstPage) {
        this.$emit("page-changed", this.currentPage - 1);
      }
    },
    nextPage() {
      if (!this.isLastPage) {
        this.$emit("page-changed", this.currentPage + 1);
      }
    },
  },
});
</script>