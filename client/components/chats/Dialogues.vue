<template>
  <div class="dialogues">
    <ChatsDialoguesItem v-for="item in itemData" v-bind:key="item.id" :name="item.name" :data="item.data" :message="item.message" :notification="item.notification" :avatar="item.avatar"/>
  </div>
</template>

<script setup lang="ts" >

  interface IDialogItem {
    name: String,
    data: String,
    message: String,
    notification: Number,
    avatar: String,
    id: Number
  }

  const itemData:Ref<Array<IDialogItem>> = ref([
    {
      id: 1,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: ""
    },

    {
      id: 2,
      name: "Maren Mango",
      data: "11:09",
      message: "Voice messade!",
      notification: 2,
      avatar: ""
    },

    {
      id: 3,
      name: "Jordyn Aminoff",
      data: "11:09",
      message: "I will come to you on the weekend",
      notification: 3,
      avatar: ""
    },

    {
      id: 4,
      name: "Marcus Carder",
      data: "11:09",
      message: "Very happy for you",
      notification: 2,
      avatar: ""
    },

    {
      id: 5,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: ""
    },

    {
      id: 6,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: ""
    },

    {
      id: 7,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: ""
    },

    {
      id: 8,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: ""
    },



  ])

</script>

<style scoped lang="sass">
  .dialogues
    display: flex
    width: calc(100% - 32px)
    margin: 50px auto 50px auto
    flex-direction: column

</style>
