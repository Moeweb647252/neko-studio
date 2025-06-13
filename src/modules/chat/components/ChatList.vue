<script setup lang="ts">
import { ref } from "vue";
const nodes = ref([
  {
    label: "默认",
    key: "chat-1",
    icon: "pi pi-folder",
    selectable: false,
    children: [
      {
        label: "Chat 1",
        key: "chat-1-1",
      },
    ],
  },
]);

const contextMenu = ref<InstanceType<
  typeof import("primevue/contextmenu").default
> | null>(null);

const items = ref<
  Array<{
    label: string;
    icon?: string;
    command?: () => void;
  }>
>([]);

const onDirRightClick = (event: MouseEvent, path: string) => {
  items.value = [
    {
      label: "新建聊天",
      icon: "pi pi-plus",
      command: () => {
        // 这里可以添加新建聊天的逻辑
        console.log("新建聊天");
      },
    },
  ];
  if (path !== "/") {
    items.value.push({
      label: "删除",
      icon: "pi pi-trash",
      command: () => {
        // 这里可以添加删除聊天的逻辑
        console.log("删除聊天");
      },
    });
  }
  contextMenu.value?.show(event);
};

const onChatRightClick = (event, key) => {};
</script>
<template>
  <Tree
    :value="nodes"
    class="tree h-full"
    selectionMode="single"
    :filter="true"
    :pt="{
      nodeLabel: 'text-sm',
      pcFilterInput: {
        root: '!text-2',
      },
      nodeContent: ({instance}) => {
        instance.$el.addEventListener('contextmenu', (event: MouseEvent) => {
          event.preventDefault();
          if (instance.node.selectable) {
            onChatRightClick(event, instance.key);
          } else {
            onDirRightClick(event, instance.key);
          }
        });
      },
    }"
    @contextmenu="onDirRightClick($event, '/')"
  >
  </Tree>
  <ContextMenu ref="contextMenu" :model="items" />
</template>

<style scoped>
.tree {
  --p-tree-padding: 0.25rem; /* 自定义间距值 */
}

.node-label {
  font-size: 0.75rem;
  padding: 0.25rem;
}
</style>
