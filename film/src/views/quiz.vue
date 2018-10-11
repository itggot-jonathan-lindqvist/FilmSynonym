<template lang="pug">
    .container-fluid
        h2.text-center.display-3 Quiz
        div(v-if="start")
            .btn-primary.btn-lg.btn.btn-block(@click="start=false, getmovie()" type="button") START
        div(v-else)
            ul.list-group.shadow-lg.p-3.mb-5.bg-white.rounded(v-for=" i in 4" )
                //- div(v-if="rightAnswer =")     
                           
                .btn.btn-group-vertical.blockquote.list-group-item-action.active(v-for="(movie,index) in movieIds" ) {{movie}}
            .plot.card.shadow-lg.bg-white.rounded.p-3.m-5
                .card-body                                         
                    p.card-text.text-center.lead {{Plot}}
            .col-m-12.text-center          
                .btn.btn-primary.btn-lg.center-block.btn-block.w-25.p-4.float-right.mr-5(type="button" onclick="smoothScroll(document.getElementById('second'))")  NEXT
            
            


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
      rightAnswer: "",
      title: "",
      Plot: "",
      // show: false,
 
    };
  },

  // computed: {
  //   isDisabled: function() {
  //     return !this.show
  // }
  // },

  methods: {
    getmovie() {
      
      
        
    },
    smoothScroll(target:any){
    let scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    let targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    let scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    }
  }
})

</script>


<style lang="sass">





        
</style>

