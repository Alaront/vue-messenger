<template>
  <div class="dialogues">
    <ChatsDialoguesItem v-for="item in itemData" v-bind:key="item.id" :linkHash="item.hash" :name="item.name" :data="item.data" :message="item.message" :notification="item.notification" :avatar="item.avatar"/>
  </div>
</template>

<script setup lang="ts" >

  interface IDialogItem {
    name: String,
    data: String,
    message: String,
    notification: Number,
    avatar: String,
    id: Number,
    hash: String
  }

  const itemData:Ref<Array<IDialogItem>> = ref([
    {
      id: 1,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: "",
      hash: "f3gFyHgJfbHfnfj7"
    },

    {
      id: 2,
      name: "Maren Mango",
      data: "11:09",
      message: "Voice messade!",
      notification: 2,
      avatar: "",
      hash: "f3gFfffbHfnfj7"
    },

    {
      id: 3,
      name: "Jordyn Aminoff",
      data: "11:09",
      message: "I will come to you on the weekend",
      notification: 3,
      avatar: "",
      hash: "ddJfbHfnfj7"
    },

    {
      id: 4,
      name: "Marcus Carder",
      data: "11:09",
      message: "Very happy for you",
      notification: 2,
      avatar: "",
      hash: "111yHgJfbHfnfj7"
    },

    {
      id: 5,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: "",
      hash: "f3gFyHgJfddF7"
    },

    {
      id: 6,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: "",
      hash: "f3g3JfbHfnfj7"
    },

    {
      id: 7,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: "",
      hash: "DF4HgJfbHfnfj7"
    },

    {
      id: 8,
      name: "Kaiya Rhiel Madsen",
      data: "11:09",
      message: "Cool!",
      notification: 2,
      avatar: "",
      hash: "f3gFyHsdfF7"
    },



  ])

</script>

<style scoped lang="sass">
  .dialogues
    display: flex
    width: 100%
    padding: 0 16px
    margin: 0 auto
    flex-direction: column
    max-width: 420px
    height: calc(100vh - 145px)
    overflow-y: auto



</style>
