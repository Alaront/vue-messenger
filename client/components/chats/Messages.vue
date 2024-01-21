<template>
  <div class="messages">
    <div class="messages__header">Message</div>
    <div class="messages__search-users">
      <input type="text" v-model="userName">
    </div>
  </div>
</template>

<script setup lang="ts">


  const userName:Ref<string> = ref('');

  watch(userName, async (newUserName) => {
    console.log(newUserName)
  })

</script>

<style scoped lang="sass">
  .messages
    width: 100%
    height: 90px
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
    margin-bottom: 10px

    &:before
      content: ''
      width: 25px
      height: 25px
      background: url("~/assets/chats/photo-camera.svg") no-repeat center
      background-size: contain
      position: absolute
      left: 0
      top: 0

  .messages__search-users
    input
      padding: 5px
      outline: none
      border-radius: 4px
      color: #000000
      border: 1px solid #000000
      font-family: "Montserrat"
      font-size: 16px
      font-style: normal
      font-weight: 400
      line-height: 24px
      letter-spacing: 0.5px
      margin-bottom: 10px
      display: block
      width: 100%


</style>
