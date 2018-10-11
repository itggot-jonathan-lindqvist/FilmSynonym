<template lang="pug">
  .container-item.form-container
    .form
      input(type="text" v-model="keyword" @keyup.enter="searchMovies()" :style="{color: inputColor, borderColor: borderColor, backgroundColor: backgroundColor }").search-text#searchtext
      button(@click="searchMovies" :style="{color: inputColor, borderColor: borderColor, backgroundColor: backgroundColor}").search-button#searchbtn 
        i(:style="{color: inputColor, backgroundColor: backgroundColor}").material-icons.search-button#searchbtn2.value search

    #movies-container
      .movie(v-for="film in movies" :key="film.imdbID")
        .img
          router-link(:to="film.Title" :lul="movie")
            img(:src="film.Poster" @click="getmovie(film.imdbID)" )
          router-view 
          

</template>
 
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import {getMovies} from '../api'

export default Vue.extend({

  data: function(){
    return {
      keyword: "",
      movies: [],
      title: "",
      movie: {},
      inputColor: "",
      borderColor: "",
      backgroundColor: "",
    }
  },
  methods: {
    searchMovies: function() {

      getMovies(this.keyword).then((response) => {
        console.log(response)
        this.movies = response
      }).catch(console.log)


      this.movies = []
      
    },
     getmovie: function(id:any){
    }
  }
});
</script>

<style scoped lang="sass" scoped>

body, html
  font-family: Helvetica, sans-serif
  margin: 0

*
  box-sizing: border-box

#main-header
  background-color: #444
  color: #eee
  padding: 20px
  input
    background-color: #555
    border: 1px solid #999

#txtMovieSearch
  margin-left: 5px
  height: 28px
  padding: 2px

#btnMovieSearch
  height: 28px
  padding: 2px
  margin-left: 2px
  background-color: #777
  border: 1px solid #999
  color: #eee

#movies-container
  display: flex
  flex-flow: row wrap
  padding: 10px
  width: 700px
  margin: 0 auto
  .img
    margin: 10px
    width: 150px
    cursor: pointer
    img
      width: 100%
</style>
