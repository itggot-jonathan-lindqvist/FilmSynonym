<template lang="pug">
    .container
        div(v-if="loading")
            p it's loading
        div(v-else)
            .container-item
                .go_back-container
                    i.material-icons.go_back arrow_back
                .title-container
                    h1.movie_title {{ this.title }}
                .switch-container
                    .switch-container-item1
                        .switch-container-item2
                            h1 Change Words
                            changeWords(v-on:active="changeWords($event)" :class="{used: isUsed}")
            .container-item.plot-text-container
                p.plot-text {{ this.plot }}
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import changeWords from '@/components/switch.vue'
import {getSynonym} from '../api'
import {getMovies} from '../api'
import {getMovie} from '../api'
import {switchWords} from '../methods'

export default Vue.extend({

    components: {
        changeWords
    },

    data: function() {
        return {

        isUsed: false,
        
        title: "",
        newTitle: "",
        originalTitle: "",

        plot: "",
        newPlot: "",
        originalPlot: "",

        loading: true,
        }
    },

    methods: {

        changeWords: function(isActive) {

            if (this.isUsed && isActive) {
                this.title = this.originalTitle
                this.plot = this.originalPlot

            }else if (this.isUsed && isActive == false){
                this.title = this.newTitle
                this.plot = this.newPlot

            } else {

                ////TITLE
                let title = this.title.split(/[.,':\/ -]/)
                let titleWords = []
                
                for (let index = 0; index < title.length; index++) {
                    if (title[index] != "") {
                        titleWords.push(getSynonym(title[index]))
                    }
                }

                Promise.all(titleWords)
                .then((response) => {
                    
                    let newTitle = switchWords(response, this.title)

                    this.title = newTitle
                    this.newTitle = newTitle
                })
                .catch(console.log)

                ////PLOT
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
                    this.newPlot = newPlot
                })
                .catch(console.log)


                this.isUsed = true

            }
        }
    },

    mounted(){

        this.title = this.$route.params.movie
        this.originalTitle = this.$route.params.movie

        getMovie(this.title).then((response) => {
            this.plot = response
            this.originalPlot = response
            this.loading = false
        }).catch(console.log)
  
    }
    
})
</script>

<style lang="sass">

    .go_back-container, .switch-container
        height: 100%
        width: 20%
        display: flex
        flex-direction: row
    
    .go_back-container
        justify-content: flex-end

    .go_back
        font-size: 200px
        color: dodgerblue

    .switch-container
        justify-content: flex-start

    .switch-container-item1
        display: flex
        flex-direction: row
        justify-content: center
        width: 50%
        height: 100%

    .switch-container-item2
        display: flex
        flex-direction: column
        width: 100%
        height: 100%

    .switch
        height: 35px
        width: 80px
        background-color: lightgrey
        border-radius: 100px
        display: flex
        flex-direction: row
        justify-content: flex-start
    
    .switch-ball
        height: 35px
        width: 35px
        border-radius: 35px
        background-color: grey

    .title-container
        height: 100%
        width: 60%
        display: flex
        flex-direction: row
        justify-content: center

    .plot-text-container
        flex-direction: column

    .plot-text
        margin-left: 25%
        margin-right: 25%
    

</style>
