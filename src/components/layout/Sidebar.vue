<script setup lang="ts">
import router from "../../router";
</script>
<template>
  <ul class="sidebar">
    <li v-for="i in router.getRoutes()" :key="i.path">
      <RouterLink :to="i.path">
        <i v-tooltip.right="i.name" :class="i.meta.icon"></i
      ></RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.sidebar {
  @apply pr-2 pl-2 pt-4 h-full;
  background-color: var(--p-zinc-200);
}
.sidebar li i {
  @apply mb-4;
  color: var(--p-zinc-500);
  font-size: 1.5rem;
}
</style>
