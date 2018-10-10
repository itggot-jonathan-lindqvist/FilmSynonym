<template lang="pug">
  .container
    .container-item.title
      h1.search-title(:style="{color: searchTitleColor}") Search
    movieGrid
      

</template>

<script lang="ts">
  import Vue from 'vue'
  import movieGrid from '@/components/MovieGrid.vue'
  export default Vue.extend({
    name: 'home',
    components: {
      movieGrid,
    },


    data: function() {
      return{
        searchTitleColor: this.$parent.$data.searchTitleColor,
        render: true
      }
    },

    watch:{ 
      searchTitleColor: function(val){
          console.log("help me!")
         } 
    },
    mounted(){
      //console.log(this.$parent.$data)
      if (this.$parent.$data.theme == false){
        this.searchTitleColor ="DodgerBlue"
      }else{
        this.$children[0].$data.borderColor = "#8d2663"
        this.$children[0].$data.inputColor = "#8d2663"
        this.$children[0].$data.backgroundColor = "black"
      }
    }
  })
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
    height: auto
    display: flex
    flex-direction: row
    justify-content: center
    // background-color: red
    // border-width: 2px
    // border-color: blue
    // border-type: solid

  .form-container
    flex-direction: column

  .form
    display: flex
    flex-direction: row
    justify-content: center
    margin-botton: 50px


  .search-title, .movie_title
    font-family: 'Lobster'
    font-size: 180px
    color: dodgerblue

  .search-button
    color: dodgerblue
    background-color: white
    text-align: center
    height: 94px
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
    width: 30%
    font-size: 70px
    font-family: 'Roboto'
    color: dodgerblue
    border-color: dodgerblue
    border-style: solid
    border-right: none
    border-width: 3px

</style>
