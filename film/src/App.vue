<template lang="pug">
  
  .app
    .header
      .header-item.random
        i.material-icons shuffle
      .header-item
        h1.logo bMovie
      .header-item.home
        i.material-icons home
        router-link(to="/") Home |
        router-link(to="/about") About |
        router-link(to="/throttler") throttler
    router-view

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="sass">
  *
    margin: 0
    padding: 0

  .app
    width: 100vw
    height: 100vh

  .header
    width: 100%
    height: 11vh
    background-color: DodgerBlue
    display: flex
    flex-direction: row
    justify-content: space-around
    min-height: 100px
    max-height: 100px

  .header-item
    width: 33%
    height: 100%
    display: flex
    flex-direction: row
    justify-content: center

  .home
    justify-content: flex-start

  .random
    justify-content: flex-end

  .logo
    font-family: 'Lobster'
    font-size: 90px
    color: white

  .material-icons
    font-family: 'Material Icons'
    font-weight: normal
    font-style: normal
    font-size: 90px
    display: inline-block
    line-height: 1
    text-transform: none
    letter-spacing: normal
    word-wrap: normal
    white-space: nowrap
    direction: ltr
    -webkit-font-smoothing: antialiased
    text-rendering: optimizeLegibility
    -moz-osx-font-smoothing: grayscale
    font-feature-settings: 'liga'
    color: white
    
</style>

