<template lang="pug">
  
  .app(:style="{backgroundColor: appColor}")
    div(v-if="loading")
      p it's loading
      p f
    div(v-else)
      .header(:style="{backgroundColor: headerColor}")
        .header-item.random
          .header-link
            router-link(:to="this.title")
              i(@click="testing").material-icons shuffle

        .header-item
          h1.logo(@click="changeTheme" ref="bmovie") bMovie

        .header-item.home
          .header-link
            router-link(to="/")
              i.material-icons home

          
          //- router-link(to="/throttler/throttler") throttler
          router-link(to="/quiz/quiz") quiz
      router-view

</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios";
import {getRandMovie} from './api'

export default Vue.extend({

  data: function(){
    return{
      title: "",
      loading: true,
      headerColor: "",
      appColor: "",
      searchTitleColor: "",
      theme: false
    }
  },

  methods:{
    testing: function(){
      window.location.href = 'http://localhost:8080/' + this.title
      console.log("WHAT THE FUCK!!!")
    },
    changeTheme: function(){
      if(this.theme == false){
        this.headerColor = "black"
        this.appColor = "Black"
        this.searchTitleColor = "#8d2663"
        this.theme = true
        console.log(this.$children)
        if(this.$children[3].$vnode.tag != "vue-component-6"){
  
          this.$children[3].$data.searchTitleColor = "#8d2663"
          this.$children[3].$children[0].$data.borderColor = "#8d2663"
          this.$children[3].$children[0].$data.inputColor = "#8d2663"
          this.$children[3].$children[0].$data.backgroundColor = "black"
        }else{
          this.$children[3].$data.movieColor = "#8d2663"
          this.$children[3].$data.plotColor = "white"
        }
      }else{
        this.headerColor = "DodgerBlue"
        this.appColor = "white"
        this.theme = false
        if(this.$children[3].$vnode.tag != "vue-component-6"){
  
          this.$children[3].$data.searchTitleColor = "DodgerBlue"
          this.$children[3].$children[0].$data.borderColor = "DodgerBlue"
          this.$children[3].$children[0].$data.inputColor = "DodgerBlue"
          this.$children[3].$children[0].$data.backgroundColor = "white"
        }else{
          this.$children[3].$data.movieColor = "DodgerBlue"
          this.$children[3].$data.plotColor = "black"
        }

      }
    }
  },

  mounted(){
    
    getRandMovie().then((response) => {
      this.title = response.data.Title
      this.loading = false
    }).catch(console.log)

    // this.loading = false

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
    cursor: pointer

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

