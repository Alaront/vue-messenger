<template>
  <div class="dialogues__item" @click="openDialog">
    <div class="dialogues__item-photo">
      <img src="~/assets/chats/photo_ava.png" alt="photo"/>
    </div>
    <div class="dialogues__item-info">
      <h6 class="dialogues__item-name">{{name}}</h6>
      <div class="dialogues__item-time">{{data}}</div>
      <div class="dialogues__item-text">{{message}}</div>
      <div class="dialogues__item-notification">{{notification}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface IProps {
    name: String,
    data: String,
    message: String,
    notification: Number,
    avatar: String,
    linkHash: String
  }

  const route = useRoute()
  console.log(route)

  const props = defineProps<IProps>()
  const {name, data, message, notification, avatar, linkHash} = toRefs(props)

  const openDialog = ():void => {
    navigateTo(`/chats?id=${linkHash.value}`)
  }

</script>

<style scoped lang="sass">
  .dialogues__item
    width: 100%
    display: flex
    padding: 11px 0 11px 0
    border-bottom: 1px solid #E2E2E2
    object-fit: contain

  .dialogues__item-photo
    margin-right: 12px
    width: 55px
    height: 55px
    border-radius: 50%
    overflow: hidden

    img
      width: 100%
      height: 100%
      object-fit: contain

  .dialogues__item-info
    width: calc(100% - 67px)
    position: relative

  .dialogues__item-name
    margin: 5px 0
    font-size: 16px
    font-style: normal
    font-weight: 700
    line-height: normal

  .dialogues__item-text
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: normal
    width: calc(100% - 40px)
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis

  .dialogues__item-time
    position: absolute
    top: 0
    right: 0
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: normal
    width: 35px

  .dialogues__item-notification
    position: absolute
    bottom: 8px
    right: 0
    background: #1EBE71
    width: 22px
    height: 22px
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: 22px
    vertical-align: center
    color: #ffffff
    border-radius: 50%
    overflow: hidden
    text-align: center


</style>
