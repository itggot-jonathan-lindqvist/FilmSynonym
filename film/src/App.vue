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

          
          router-link(to="/throttler") throttler
      router-view

</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios";

let key = "57b31362",
  baseurl = "https://www.omdbapi.com/?apikey=" + key;
//import child from '@/views/Home.vue'
export default Vue.extend({
  // components:{
  //   child
  // },

  data: function(){
    return{
      omdbID: "tt0",
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
      //this.loading = true
      console.log("WHAT THE FUCK!!!")
      //this.loading = false
    },
    changeTheme: function(){
      console.log("HSDAKSLDHL")

      this.headerColor = "black"
      this.appColor = "Black"
      this.searchTitleColor = "#8d2663"
      this.theme = true
      console.log("cancer")
      console.log(this.$children[3].$data)
      console.log(this.$children[3])
      console.log(this.$children[3].$children[0].$data)
      this.$children[3].$data.searchTitleColor = "#8d2663"
      this.$children[3].$children[0].$data.borderColor = "#8d2663"
      this.$children[3].$children[0].$data.inputColor = "#8d2663"
      this.$children[3].$children[0].$data.backgroundColor = "black"
      //this.$root.$children[0].omegalul()

      // let element = document.getElementById("app")
      // element.classList.toggle("app-dark")

      // let headerdark = document.getElementById("header")
      // headerdark.classList.toggle("header-dark")

      // console.log("BEFORE") //after this it wont log but still finds the classes

      // let containerdark = document.getElementById("searchtitle")
      // containerdark.classList.toggle("container-dark")
      
      // let searchtextdark = document.getElementById("searchtext")
      // searchtextdark.classList.toggle("searchtext-dark")
      
      // let searchbtndark = document.getElementById("searchbtn")
      // searchbtndark.classList.toggle("searchbtn-dark")

      // let searchbtndark2 = document.getElementById("searchbtn2")
      // searchbtndark2.classList.toggle("searchbtn-dark")

      // let plotdark = document.getElementById("plot") // cant find id element
      // plotdark.classList.toggle("goback-dark")

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

  // .app-dark
  //   background-color: black
  // .header-dark
  //   background-color: black
  // .container-dark
  //   color: #8d2663 !important
  // .searchtext-dark
  //   color: #8d2663 !important
  //   background-color: black 
  //   border-color: #8d2663 !important
  // .searchbtn-dark
  //   background-color: black !important
  //   border-color: #8d2663 !important
  //   color: #8d2663 !important
  // .goback-dark
  //   color: white !important
  //   background-color: red

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

