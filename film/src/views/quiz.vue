<template lang="pug">
    .container-fluid
        h2.text-center.display-3 Quiz
        div(v-if="start")
            .btn-primary.btn-lg.btn.btn-block(@click="start=false, getmovie()" type="button") START
        div(v-else)
            ul.list-group.shadow-lg.p-3.mb-5.bg-white.rounded()
                //- div(v-if="rightAnswer =")                
                li.list-group-item.list-group.list-group-item-action.blockquote(v-for="(movie,index) in movieIds") {{movie}}
            .plot.card.shadow-lg.bg-white.rounded.p-3.m-5
                .card-body                                         
                    p.card-text.text-center.lead {{Plot}}
            .col-m-12.text-center          
                .btn.btn-primary.btn-lg.center-block.btn-block.w-25.p-4.float-right.mr-5.disabled(role="button" aria-disabled="true") NEXT
            


</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import movieVue from "@/views/movie.vue";
let key = "57b31362",
  baseurl = "https://www.omdbapi.com/?apikey=" + key;
export default Vue.extend({
  data: function() {
    return {
      start: true,
      omdbID: "tt0",
      movieIds: [],
      rightAnswer: null,
      title: "",
      Plot: ""
    };
  },
  methods: {
    getmovie() {
      for (let i = 0; i < 4; i++) {
        this.omdbID = "tt0"
        this.title = ""
        // console.log("Entered function movieID");
        for (let y = 0; y < 6; y++) {
          // This will loop 6 times
          let number = Math.floor(Math.random() * 10)
          let num = number.toString()
          this.omdbID = this.omdbID + num
          // console.log(this.omdbID);
        }

        axios.get(baseurl + "&i=" + this.omdbID).then(response => {
          // console.log("here now");
          // console.log(response.data.Title);
          this.title = response.data.Title
          this.movieIds.push(this.title) // fungerar men står fel
        });
      }
      console.log(this.movieIds)
      this.getPlot()
    },
    getPlot() {
      let rand = Math.floor(Math.random() * 3)
      console.log(rand)
      console.log(this.movieIds)
      console.log(this.movieIds.length)
      axios.get(baseurl + "&t=" + this.movieIds[rand]).then(response => {
        console.log("test")
        console.log(this.movieIds[rand])
        console.log("test")
        this.rightAnswer = this.movieIds[rand]
        this.Plot = response.data.Plot
      });
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

