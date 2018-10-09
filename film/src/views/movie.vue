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
                            //- (@click="changeWords" :class="{used: isUsed, active: isActive}")
            .container-item.plot-text-container
                p.plot-text {{ this.plot }}
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import changeWords from '@/components/switch.vue'
import {getSynonym} from '../api'

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

            }else if (this.isUsed && isActive == false){
                this.title = this.newTitle

            } else {

                this.isActive = !this.isActive
                let title = this.title.split(/[.,':\/ -]/)
                let titleWords = []
                
                for (let index = 0; index < title.length; index++) {
                    if (title[index] != "") {
                        titleWords.push(getSynonym(title[index]))
                    }
                }

                Promise.all(titleWords)
                .then((response) => {
                    let title = this.title.split(" ")
                    let response_index = 0

                    console.log(response)
                    console.log(title)

                    for (let index = 0; index < title.length; index++) {
                        if (typeof response[response_index] === 'undefined') {
                            response_index++
                        }else if (/[.,':\/-]/.test(title[index]) && /[A-Za-z]/.test(title[index])) {
                            let word = title[index].split("")
                            let i = 1
                            while (/[.,':\/ -]/.test(word[i]) == false) {
                                word[0] = word[0] + word[i]
                                word[i] = ""
                                i++
                            }

                            word[0] = response[response_index]

                            for (let i = 1; i < word.length; i++) {
                                word[0] = word[0] + word[i]
                            }

                            title[index] = word[0]
                            response_index++
                        }else if (/[.,':\/-]/.test(title[index])) {
                        }else {
                            title[index] = response[response_index]
                            response_index++
                        }
                    }

                    let newTitle = ""

                    for (let index = 0; index < title.length; index++) {
                        newTitle = newTitle + title[index]
                        if (index == title.legnth - 1) {
                        }else{
                            newTitle += " "
                        }
                    }

                    this.title = newTitle
                    this.newTitle = newTitle
                })
                .catch(console.log)

                this.isUsed = true

            }
        }

    },
    
    mounted(){
        let key = "57b31362",
        baseurl = "https://www.omdbapi.com/?apikey=" + key

        this.title = this.$route.params.movie
        this.originalTitle = this.$route.params.movie
        
        axios.get(baseurl + "&t=" + this.title).then((response) => {

            this.plot = response.data.Plot
            this.originalPlot = response.data.Plot
           
            this.loading = false
        })
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
