<template>
  <div class="messages">
    <div class="messages__header">Message</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
  .messages
    width: 100%
    height: 44px
    position: fixed
    top: 0
    left: 0
    padding: 10px 15px
    background: #ffffff
    z-index: 1

  .messages__header
    font-size: 18px
    font-style: normal
    font-weight: 400
    line-height: normal
    position: relative
    text-align: center

    &:before
      content: ''
      width: 25px
      height: 25px
      background: url("~/assets/chats/photo-camera.svg") no-repeat center
      background-size: contain
      position: absolute
      left: 0
      top: 0


</style>
