<template>
  <WorkLayout>
    <div class="chat">
      <ChatsSidebar />
      <ChatsMessages />
      <ChatsDialogues />
    </div>
  </WorkLayout>
</template>

<script setup lang="ts">
import WorkLayout from "/layout/WorkLayout.vue";


</script>

<style scoped lang="sass">
  .chat
    width: 100%
    height: 100%
    position: relative

</style>
