<template>
  <div class="sidebar">
    <nav class="sidebar__menu">
      <ul>
        <li class="sidebar__chats"></li>
        <li class="sidebar__settings"></li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
  .sidebar
    padding: 15px
    width: 100%
    gap: 20px
    background: #ffffff
    z-index: 1

  .sidebar__menu ul
    display: flex
    flex-direction: row
    justify-content: center
    gap: 30px

  .sidebar__chats
    width: 25px
    height: 24px
    background: url("~/assets/chats/chats.svg")
    background-size: contain

  .sidebar__settings
    width: 25px
    height: 25px
    background: url("~/assets/chats/settings.svg")
    background-size: contain



</style>
