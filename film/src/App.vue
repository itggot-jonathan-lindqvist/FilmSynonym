<template lang="pug">
  
  .app
    div(v-if="loading")
      p it's loading
    div(v-else)
      .header
        .header-item.random
          .header-link
            router-link(:to="this.title")
              i.material-icons shuffle

        .header-item
          h1.logo bMovie

        .header-item.home
          .header-link
            router-link(to="/")
              i.material-icons home

          
          router-link(to="/throttler") throttler
      router-view

</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios";

let key = "57b31362",
  baseurl = "https://www.omdbapi.com/?apikey=" + key;
export default Vue.extend({

  data: function(){
    return{
      omdbID: "tt0",
      title: "",
      loading: true
    }
  },

  mounted(){
    this.omdbID = "tt0"
    this.title = ""
    console.log("Entered function movieID")
    for ( var i = 0; i < 6; i++ ) {
      // This will loop 6 times
      let number = Math.floor(Math.random() * 10); 
      let num = number.toString()
      this.omdbID = this.omdbID  + num
      console.log(this.omdbID)
    }

    axios.get(baseurl + "&i=" + this.omdbID).then((response) => {
      console.log("here now")
      console.log(response.data.Title)
      this.title = response.data.Title
      this.loading = false
    })
  }
  
})
</script>

<style lang="sass">
  *
    margin: 0
    padding: 0

  p
    font-family: 'Roboto'

  h1
    font-family: 'Lobster'

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

  .header-link
    height: 100%
    width: auto
    display: flex
    flex-direction: column
    justify-content: flex-end

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

