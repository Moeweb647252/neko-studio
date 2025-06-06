<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
watchEffect(() => {
  console.log(`Current route: ${router.currentRoute.value.path}`);
});
</script>
<template>
  <LayoutView />
</template>
