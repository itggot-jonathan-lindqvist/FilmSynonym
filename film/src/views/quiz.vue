<template lang="pug">
    .container-fluid
        h2.text-center.display-3 Quiz
        div(v-if="start")
            .btn-primary.btn-lg.btn.btn-block(@click="start=false, getmovie()" type="button") START
        div(v-else)
            ul.list-group.shadow-lg.p-3.mb-5.bg-white.rounded()
                //- div(v-if="rightAnswer =")     
                           
                .btn.btn-group-vertical.blockquote.list-group-item-action.active(v-for="(movie,index) in movieIds" ) {{movie}}
            .plot.card.shadow-lg.bg-white.rounded.p-3.m-5
                .card-body                                         
                    p.card-text.text-center.lead {{Plot}}
            .col-m-12.text-center          
                .btn.btn-primary.btn-lg.center-block.btn-block.w-25.p-4.float-right.mr-5  NEXT
            


</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import movieVue from "@/views/movie.vue";
import {getRandMovie} from '../api'
import {getMovie} from '../api'

export default Vue.extend({
  data: function() {
    return {
      start: true,
      omdbID: "tt0",
      movieIds: [],
      rightAnswer: "",
      title: "",
      Plot: "",
    };
  },

  methods: {
    getmovie() {
      let movies = []

      for (let index = 0; index < 4; index++) {
        movies.push(getRandMovie())
      }
     
      Promise.all(movies).then((response) => {

        if(typeof response === "string"){
          console.log(response)
        }

        console.log(response[0].data.Plot)
        console.log(response[1].data.Plot)
        console.log(response[2].data.Plot)
        console.log(response[3].data.Plot)


        this.movieIds = response
    
      }).catch(() => {
        console.log("FUCK")
      })

      console.log(getMovie(this.movieIds[0]))

    }
  }
});
</script>


<style lang="sass">

    // .titles
    //     width: 100%
    //     heigth: 30vh
    //     margin: auto
        
    // .plot
    //     width: 100%
    //     heigth: 30vh
    //     margin: auto
    //  #btn
    //     background: #456
    //     padding: 10px
    //    margin: auto

    // div
    //     width: 100%




        
</style>

