<template>
  <WorkLayout>

    <div class="chat-wrapper" :class="{'chat-wrapper--messages' :route.query.id}">
      <div class="chat__dialogs">
        <ChatsMessages />
        <ChatsDialogues />
        <ChatsSidebar />
      </div>
      <div class="chat__messages">
        <ChatsMessagesChat />
        <ChatsUserDialogue />
      </div>
    </div>
  </WorkLayout>
</template>

<script setup lang="ts">
import WorkLayout from "/layout/WorkLayout.vue";

const route = useRoute()
console.log('route', route.query.id)
</script>

<style scoped lang="sass">
  @import "~/assets/sass/mixins.sass"
  @import "~/assets/sass/variables.sass"

  .chat-wrapper
    +min-w($desktop_mf)
      display: flex
      height: 100vh

  .chat__messages
    display: none

    +min-w($desktop_mf)
      display: block
      flex: 1
      height: 100%
      overflow-y: auto
      position: relative

  .chat__dialogs
    +min-w($desktop_mf)
      display: block
      width: 400px
      height: 100%
      overflow-y: auto
      position: relative


  .chat-wrapper--messages
    .chat__messages
      display: block

    .chat__dialogs
      display: none

      +min-w($desktop_mf)
        display: block



</style>
