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
// Filmdata(:lul="{foo:'foobar'}")
import Vue from "vue";
import axios from "axios";
import Filmdata from '@/views/movie.vue'

let key = "57b31362",
  baseurl = "https://www.omdbapi.com/?apikey=" + key;

export default Vue.extend({
  components:{
    Filmdata
  },

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
      let keyword = this.keyword;
      console.log("hej");
      console.log(baseurl + "&s=" + keyword.replace(" ", "+"));

      axios.get(baseurl + "&s=" + keyword.replace(" ", "+")).then((response) => {
      let movies = this.movies
        console.log(response.data.Response)
        if(response.data.Response == "True"){
          for (var i = 0; i < response.data.Search.length; i++) {
            if (response.data.Search[i].Poster != "") {
              movies.push(response.data.Search[i])
            }
          }
        }else{
          console.log("404")
        }
      })
      this.movies = []
      
    },
     getmovie: function(id:any){
    //   console.log("yis")
    //   console.log(this)
    //   axios.get(baseurl + "&i=" + id).then((response) => {
    //     //console.log(response)
    //     //let movie = this.movie
    //     //movie.push(response.data)
    //     this.movie = response.data
    //     //console.log(movie)

    //   })
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
