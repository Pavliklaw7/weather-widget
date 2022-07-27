<template>
  <div class="text-center mb-5">
    <div class="pagination">
      <span
        v-for="page in pages"
        :key="page"
        class="pagination__item"
        @click="setCurrentPage(page - 1)"
        :class="{ active: currentPage === page - 1 }"
      >
        {{ page }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["currentPage", "pages"],
  methods: {
    ...mapMutations(["setCurrentPage"]),
  },
};
</script>

<style>
.pagination {
  display: flex;
  align-content: center;
  justify-content: center;
}

.pagination__item {
  height: 2rem;
  width: 2rem;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
}

.pagination__item.active {
  background-color: #1976d18a;
}

.pagination__item:not(:last-child) {
  margin-right: 0.5rem;
}
</style>
