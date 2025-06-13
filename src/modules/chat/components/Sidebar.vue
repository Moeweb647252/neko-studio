<script setup lang="ts"></script>
<template>
  <div>
    <Tabs value="0" class="h-full">
      <TabList>
        <Tab value="0" class="tab"> Chats </Tab>
        <Tab value="0" class="tab"> Chats </Tab>
        <Tab value="0" class="tab"> Chats </Tab>
      </TabList>
      <TabPanels class="h-full overflow-hidden p-2 tab-panels">
        <TabPanel value="0" class="h-full overflow-hidden">
          <ChatChatList />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped>
.tab-panels {
  --p-tabs-tabpanel-padding: 0.25rem; /* 自定义间距值 */
}
.tab {
  --p-tabs-tab-padding: 0.75rem; /* 自定义间距值 */
  font-size: 0.75rem;
}
</style>
