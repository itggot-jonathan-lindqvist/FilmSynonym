<template lang="pug">
  .container-item.form-container
    .form
      input(type="text" v-model="keyword" @keyup.enter="searchMovies()").search-text
      button(@click="searchMovies").search-button
        i.material-icons.search-button.value search

    #movies-container
      .movie(v-for="film in movies" :key="film.id")
        .img
          img(:src="film.Poster")

</template>
 
<script lang="ts">
import Vue from "vue"
import axios from "axios"
let key = "57b31362",
  baseurl = "https://www.omdbapi.com/?apikey=" + key;

export default Vue.extend({
  data: () => ({
    keyword: "",
    movies: [],
  }),

  props: {
    msg: String
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
              movies.push(response.data.Search[i]);
            }
          }
        }else{
          console.log("404")
        }
      })
      this.movies = []
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
