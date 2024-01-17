<template>
  <main class="main">
    <div class="chat">
      <ChatsSidebar />
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">

  .chat
    width: 100%
    height: 100%
    position: relative

  .main
    height: 100vh

</style>
