<template lang="pug">
  .container
    .container-item.title
      h1.search-title Search
    .container-item.form
      input(type="text").search-text
      button.search-button
        i.material-icons.search-button.value search
        
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <movieGrid msg="B Movies"/>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import movieGrid from '@/components/MovieGrid.vue';
export default Vue.extend({
  name: 'home',
  components: {
    movieGrid,
  },
});
</script>

<style lang="sass">
  .container
    width: 100%
    height: 89vh
    display: flex
    flex-direction: column
    justify-content: center

  .container-item
    width: 100%
    height: 200px
    display: flex
    flex-direction: row
    justify-content: center

  .search-title
    font-family: 'Lobster'
    font-size: 180px
    color: dodgerblue

  .search-button
    color: dodgerblue
    background-color: white
    text-align: center
    height: 106px
    width: 103px
    border-color: dodgerblue
    border-style: solid
    border-left: none
    border-width: 3px

  .value
    height: 100px
    width: 100px
    height: 50%
    border: none

  .search-text
    height: 50%
    width: 30%
    font-size: 70px
    font-family: 'Lobster'
    color: dodgerblue
    border-color: dodgerblue
    border-style: solid
    border-right: none
    border-width: 3px





</style>