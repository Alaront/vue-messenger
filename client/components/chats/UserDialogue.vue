<template>
  <div class="user-dialogue">
    <div class="user-dialogue__wrapper">
      <ChatsUserDialogueItem v-for="item in allMessage" v-bind:key="item.id" :type="item.type" :message="item.message" :date="item.date" :media="item.media" />
    </div>
    <!--    <h2>ID {{$route.params.id}}</h2>-->
    <ChatsForm />
  </div>
</template>

<script setup lang="ts">
  interface IMedia {
    id: number,
    url: string
  }

  interface IAllMessage {
    id: number
    type: 'you' | 'user',
    message: string,
    media: Array<IMedia>,
    date: string
  }

  const allMessage:Ref<Array<IAllMessage>> = ref([
    {
      id: 1,
      type: 'you',
      message: 'Hi, I got your contact from Tom',
      media: [],
      date: '12:50'
    },
    {
      id: 2,
      type: 'you',
      message: 'Hi, I got your contact from Tom',
      media: [],
      date: '12:50'
    },
    {
      id: 3,
      type: 'you',
      message: 'I plan to go to Norway, Tom said that you can tell about interesting places. I am very interested in the city of Stavanger. Have you been to this city?',
      media: [],
      date: '12:51'
    },
    {
      id: 4,
      type: 'user',
      message: 'Hi yes i was in this city',
      media: [
        {
          id: 0,
          url: 'd'
        }
      ],
      date: '12:51'
    },
    {
      id: 5,
      type: 'user',
      message: 'How do you plan to fly to Norway',
      media: [],
      date: '12:52'
    },
    {
      id: 6,
      type: 'you',
      message: 'I plan to go to Norway, Tom said that you can tell about interesting places. I am very interested in the city of Stavanger. Have you been to this city?',
      media: [],
      date: '12:51'
    },
    {
      id: 7,
      type: 'you',
      message: 'Hi, I got your contact from Tom',
      media: [],
      date: '12:51'
    },
    {
      id: 8,
      type: 'you',
      message: 'I plan to go to Norway, Tom said that you can tell about interesting places. I am very interested in the city of Stavanger. Have you been to this city?',
      media: [],
      date: '12:51'
    },
    {
      id: 9,
      type: 'you',
      message: 'Hi, I got your contact from Tom',
      media: [
        {
          id: 0,
          url: 'd'
        }
      ],
      date: '12:51'
    },
  ])

</script>

<style scoped lang="sass">
  .user-dialogue
    width: 100%
    margin: 0 auto
    display: flex
    flex-direction: column
    justify-content: flex-end

  .user-dialogue__wrapper
    padding: 0 32px
    max-height: 100%
    overflow-y: auto
    height: calc(100vh - 112px)

</style>
