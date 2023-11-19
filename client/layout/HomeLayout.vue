<template>
  <main class="home">
    <slot />
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
  .home
    height: 100%
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    background-image: url("~/assets/decor/topography.svg")
    background-color: rgba(255,255,255,0.6)
    background-blend-mode: lighten


</style>
