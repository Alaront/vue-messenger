<template>
  <WorkLayout>
    <ChatsMessagesChat />
    <ChatsUserDialogue />
  </WorkLayout>
</template>

<script setup lang="ts" >
import WorkLayout from "/layout/WorkLayout.vue";

const route = useRoute()
console.log(route.params.id)

</script>

<style scoped lang="sass">

</style>
