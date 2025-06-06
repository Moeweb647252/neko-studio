<script setup lang="ts"></script>

<template>
  <main class="size-full overflow-auto">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <!-- 主要内容 -->
            <component :is="Component"></component>
            <!-- 加载中状态 -->
            <template #fallback> 正在加载... </template>
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
  </main>
</template>

<style scoped></style>
