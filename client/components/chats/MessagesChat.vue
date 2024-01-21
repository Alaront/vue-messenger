<template>
  <div class="messages-chat">
    <NuxtLink to="/chats" class="messages-chat__back">Message</NuxtLink>
    <div class="messages-chat__header">Name Name</div>
    <div class="messages-chat__photo">
      <div class="messages-chat__photo-wrapper">
        <img src="~/assets/chats/photo_ava.png" alt="photo"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
  @import "~/assets/sass/mixins.sass"
  @import "~/assets/sass/variables.sass"

  .messages-chat__back
    color: #000000
    text-align: center
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: normal
    padding: 0 0 0 16px
    position: relative
    text-decoration: none

    &:before
      content: ''
      position: absolute
      left: 0
      top: 50%
      width: 7px
      height: 14px
      background: url("~/assets/decor/back.svg") no-repeat center
      background-size: contain
      transform: translateY(-50%)

  .messages-chat
    width: 100%
    height: 44px
    //position: fixed
    //top: 0
    //left: 0
    padding: 20px 15px 10px 15px
    background: #ffffff
    z-index: 1
    display: flex
    align-items: center
    justify-content: space-between

    +min-w($desktop_mf)
      //position: absolute
      top: 0

  .messages-chat__header
    font-size: 18px
    font-style: normal
    font-weight: 400
    line-height: normal
    position: relative
    text-align: center

  .messages-chat__photo
    width: 40px
    height: 40px
    position: relative

    &:before
      content: ''
      width: 12px
      height: 12px
      position: absolute
      bottom: 0
      right: 0
      background: #1EBE71
      border-radius: 50%
      overflow: hidden
      border: 3px solid #ffffff


  .messages-chat__photo-wrapper
    border-radius: 50%
    overflow: hidden


    img
      width: 100%
      object-fit: contain

</style>
