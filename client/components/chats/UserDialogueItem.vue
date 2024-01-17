<template>
  <div class="user-dialogue__item" :data-type="type">
    <div v-if="media.length" class="user-dialogue__item-media">
      <div class="user-dialogue__item-photo">
        <img src="~/assets/chats/Avatar.png" alt="phot" />
      </div>
    </div>

    <div class="user-dialogue__item-text">
      {{message}}
    </div>

    <div class="user-dialogue__item-date">
      {{date}}
    </div>
  </div>
</template>

<script setup lang="ts">
  interface IMedia {
    id: number,
    url: string
  }

  interface IProps {
    type: 'you' | 'user',
    message: string,
    media: Array<IMedia>,
    date: string
  }

  const prop = defineProps<IProps>()
</script>

<style scoped lang="sass">
  .user-dialogue__item
    font-family: "Montserrat"
    font-size: 14px
    font-style: normal
    font-weight: 400
    line-height: normal
    color: #000000


    &[data-type="date"]
      padding: 6px 22px
      background: #F2F2F2
      border-radius: 40px
      max-width: max-content
      margin: 0 auto 25px auto

    &[data-type="you"]
      padding: 11px 13px
      background: #1EBE71
      border-radius: 10px
      margin: 0 0 10px auto
      max-width: 70%
      color:  #FFF

    &[data-type="user"]
      padding: 11px 13px
      background: #F2F2F2
      border-radius: 10px
      margin: 0 auto 10px 0
      max-width: 70%

  .user-dialogue__item-photo
    border-radius: 20px
    overflow: hidden
    margin-bottom: 20px

    img
      width: 100%
      height: 100%
      display: block
      object-fit: contain

  .user-dialogue__item-text
    margin-bottom: 10px

  .user-dialogue__item-date
    font-family: "Montserrat"
    font-size: 12px
    font-style: normal
    font-weight: 400
    line-height: normal
    color: #000000

    .user-dialogue__item[data-type="you"] &
      text-align: right
      color: #ffffff

</style>
