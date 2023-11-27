<template>
  <HomeLayout>
    <div class="home-page">
      <h1>VUE<br>messenger</h1>
      <div class="home-btn">
        <NuxtLink to="/signIn">Sign in</NuxtLink>
        <NuxtLink to="/signUp">Sign up</NuxtLink>
      </div>
    </div>
  </HomeLayout>
</template>

<script setup lang="ts">
import HomeLayout from "~/layout/HomeLayout.vue";
</script>

<style scoped lang="sass">
  .home-page
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  h1
    color: #000
    text-align: center
    font-family: "Montserrat"
    font-size: 48px
    font-style: normal
    font-weight: 600
    line-height: 49.2px
    letter-spacing: 1.68px
    margin-bottom: 30px

  .home-btn
    display: flex

    a
      border-radius: 100px
      background: #000
      border: none
      outline: none
      box-shadow: none
      padding: 10px 30px
      color: #FFF
      text-align: center
      font-family: "Montserrat"
      font-size: 16px
      font-style: normal
      font-weight: 700
      line-height: 22px
      display: block
      cursor: pointer
      text-decoration: none

      &:first-child
        margin-right: 20px


</style>
