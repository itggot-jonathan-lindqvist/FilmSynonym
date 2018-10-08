<template lang="pug">
    .container-fluid
        h2.text-center.display-3 Quiz
        div(v-if="start")
            .btn-primary.btn-lg.btn.btn-block(@click="start=false, getmovie()" type="button") START
        div(v-else)
            ul.list-group.shadow-lg.p-3.mb-5.bg-white.rounded()
                li.list-group-item(v-for="movie in movieIds") {{movie}}
            .plot.card.shadow-lg.bg-white.rounded.p-3.m-5
                .card-body
                    p.card-text.text-center.lead Hello ma friend


</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue);
let key = "57b31362",
  baseurl = "https://www.omdbapi.com/?apikey=" + key;
export default Vue.extend({
  data: function() {
    return {
      start: true,
      omdbID: "tt0",
      movieIds:[],
      title: ""
    };
  },
  methods: {
    getmovie() {
      for (let i = 0; i < 4; i++) {
        this.omdbID = "tt0";
        this.title = "";
        console.log("Entered function movieID");
        for (var y = 0; y < 6; y++) {
            // This will loop 6 times
            let number = Math.floor(Math.random() * 10);
            let num = number.toString();
            this.omdbID = this.omdbID + num;
            console.log(this.omdbID);
        }

        axios.get(baseurl + "&i=" + this.omdbID).then(response => {
            console.log("here now");
            console.log(response.data.Title);
            this.title = response.data.Title;
            this.movieIds.push(this.title)
        })
          
      }
        console.log(this.movieIds)
    },
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
    // #btn
    //     background: #456
    //     padding: 10px
    //     margin: auto

    // div
    //     width: 100%

        
</style>

