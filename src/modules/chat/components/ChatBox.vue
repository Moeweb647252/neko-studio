<script setup lang="ts">
const value = ref<string>("");
</script>

<template>
  <div class="size-full grid-(~ rows-[1fr_auto])">
    <div>
      <div class="size-full grid-(~ rows-[auto_1fr])">
        <div
          class="p-3 content-center"
          style="font-size: 0.75rem; font-weight: 600"
        >
          Chat Name
        </div>
        <div></div>
      </div>
    </div>
    <div class="p-2">
      <div class="flex gap-2">
        <Textarea v-model="value" rows="5" class="w-full resize-none block" />
        <div class="self-end">
          <Button class="h-fit whitespace-nowrap">发送</Button>
        </div>
      </div>
    </div>
  </div>
</template>
