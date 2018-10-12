<template lang="pug">
    .container-fluid
        h2.text-center.display-3 Quiz
        div(v-if="start")
            .btn-primary.btn-lg.btn.btn-block(@click="start=false, getmovie()" type="button") START
        div(v-else)
            ul.list-group.shadow-lg.p-3.mb-5.bg-white.rounded(v-for=" i in 4" )
                //- div(v-if="rightAnswer =")     
                           
                .btn.btn-group-vertical.blockquote.list-group-item-action.active(v-for="movie in movies" @click="answer(movie)") {{movie}}
            .plot.card.shadow-lg.bg-white.rounded.p-3.m-5
                .card-body                                         
                    p.card-text.text-center.lead {{plot}}
            .col-m-12.text-center          
<<<<<<< HEAD
                .btn.btn-primary.btn-lg.center-block.btn-block.w-25.p-4.float-right.mr-5(@click="getmovie") Try Again!
=======
                .btn.btn-primary.btn-lg.center-block.btn-block.w-25.p-4.float-right.mr-5(type="button" onclick="smoothScroll(document.getElementById('second'))")  NEXT
            
>>>>>>> 54ee1d3f0137c449c513e88a65ab6fd260c6ef53
            


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
import {getSynonym} from '../api'
import {switchWords} from '../methods'

export default Vue.extend({
  data: function() {
    return {
      start: true,
      movies: [],
      rightAnswer: "",
      plot: "",
    };
  },

  methods: {
    answer: function(answer) {

      if (answer == this.rightAnswer){
        alert("you are right!")
      }else {
        alert("you are wrong!")
      }
    },

    getmovie: function () {
      this.plot = ""
      this.rightAnswer = ""
      this.movies = []
      let movies = []

      for (let index = 0; index < 4; index++) {
        movies.push(getRandMovie())
      }
     
      Promise.all(movies).then((response) => {

        let randNum = Math.floor(Math.random() * (movies.length))

        this.rightAnswer = response[randNum].data.Title
        this.plot = response[randNum].data.Plot
        let plot = this.plot.split(/[.,':\/ -]/)
        let plotWords = []

        for (let index = 0; index < plot.length; index++) {
          if (plot[index] != "") {
            plotWords.push(getSynonym(plot[index]))
          }
        }

        Promise.all(plotWords)
        .then((response) => {
          let newPlot = switchWords(response, this.plot)
          this.plot = newPlot
        })
        .catch(console.log)

        for (let index = 0; index < response.length; index++) {
          this.movies.push(response[index].data.Title)
        }
    
      }).catch(() => {
        console.log("FUCK")
      })

<<<<<<< HEAD
    }
=======
      console.log(getMovie(this.movieIds[0]))

    },
    
    // smoothScroll(target:any){
    //     let scrollContainer = target;
    //     do { //find scroll container
    //         scrollContainer = scrollContainer.parentNode;
    //         if (!scrollContainer) return;
    //         scrollContainer.scrollTop += 1;
    //     } while (scrollContainer.scrollTop == 0);
        
    //     let targetY = 0;
    //     do { //find the top of target relatively to the container
    //         if (target == scrollContainer) break;
    //         targetY += target.offsetTop;
    //     } while (target = target.offsetParent);
        
    //     let scroll = function(c, a, b, i) {
    //         i++; if (i > 30) return;
    //         c.scrollTop = a + (b - a) / 30 * i;
    //         setTimeout(function(){ scroll(c, a, b, i); }, 20);
    //     }


    // }
>>>>>>> 54ee1d3f0137c449c513e88a65ab6fd260c6ef53
  }
})

</script>


<style lang="sass">
<<<<<<< HEAD
=======





        
>>>>>>> 54ee1d3f0137c449c513e88a65ab6fd260c6ef53
</style>

