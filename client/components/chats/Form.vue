<template>
  <form class="user-dialogue__form" @submit.prevent="formSubmit">
    <span class="user-dialogue__form-secure"></span>
    <textarea class="user-dialogue__form-text" placeholder="Message" v-on:keydown.enter="formSubmit" v-model="messageText"/>
    <span class="user-dialogue__form-smile" v-on:click="clickSmile"></span>
    <button class="user-dialogue__form-push"></button>
  </form>
</template>

<script setup lang="ts">
  let messageText = ref<string>('')

  let clickSmile = ():void => {
    messageText.value += " ;)"
    console.log('smile', messageText.value)
  }

  let formSubmit = (e: SubmitEvent | KeyboardEvent):void => {
    console.log(e, messageText.value)
  }

</script>

<style lang="sass" scoped>

.user-dialogue__form
  display: flex
  flex-direction: row
  padding: 20px 15px 0 15px
  position: relative
  align-items: center

  .user-dialogue__form-secure
    width: 15px
    height: 24px
    background: url("~/assets/chats/secure.svg") no-repeat center
    background-size: contain

  .user-dialogue__form-text
    resize: none
    outline: none
    border: none
    border-radius: 40px
    background: #F2F2F2
    padding: 6px 13px
    flex: 1
    margin: 0 10px
    color: #000000
    font-family: "Montserrat"
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: normal

    &:focus
      outline: none

  .user-dialogue__form-smile
    width: 23px
    height: 23px
    background: url("~/assets/chats/smile.svg") no-repeat center
    background-size: contain
    position: absolute
    right: 60px
    top: 32px

  .user-dialogue__form-push
    width: 23px
    height: 23px
    background: url("~/assets/chats/arrow-up.svg") no-repeat center
    background-size: contain
    border: none
    outline: none

    &:focus
      border: none
      outline: none


</style>
