<template lang="pug">
.switch-container-item2
    h1 Change Words
    .switch( @click="changeWords" v-class="{active: isActive}" :style="{justifyContent: activeFlex}")
        .switch-ball(:style="{backgroundColor: activeColor}")

</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios"
export default Vue.extend({
    
    props: ["plot", "title"],

    data: () => ({
        isActive: false,
        activeColor: null,
        activeFlex: null,
    }),

    methods: { 
        changeWords: function() {
            this.isActive = !this.isActive
            if (this.isActive == true) {
                this.activeFlex = "flex-end"
                this.activeColor = "dodgerblue"

                let plot = this.plot.split(" ")
                let title = this.title.split(" ")
                let changedTitle = ""

                for (let index = 0; index < title.length; index++) {
                    this.changeWord(title, index)
                }

                console.log(title)

                for (let index = 0; index < title.length; index++) {
                    changedTitle = changedTitle + title[index]
                    if (index == title.legnth - 1) {
                    }else{
                        changedTitle += " "
                    }
                }

                this.$emit('changeWords', changedTitle)
                
            }else{
                this.$emit('changeWords', this.$route.params.movie)
                this.activeFlex = null
                this.activeColor = null
            }            
        },

        getSynonym: function(word: string) { 
 
            return new Promise( (resolve, reject) => {

                let url = 'https://wordsapiv1.p.mashape.com/words/' + word + '/synonyms'
                let synonym;

                let hej = axios({
                    method:'get',
                    url: url,
                    headers: {'X-Mashape-Key': 'jo1yKAzUuHmshbgi84oBycgJNyxjp1ksuV8jsnVCC9lm0pJaqD'},
                }).then((response) => {
                    
                    let synonyms = response.data.synonyms
                    let randNum = Math.floor(Math.random() * (synonyms.length))

                    synonym = synonyms[randNum]
                    resolve(synonym)

                }).catch((response) => {

                })
            })

        },

        changeWord: function(string, index) {
            if(/[.,':\/ -]/.test(string[index])){
                let word = string[index].split("")
                let i = 1
                while (/[.,':\/ -]/.test(word[i]) == false) {
                    word[0] = word[0] + word[i]
                    word[i] = ""
                    i++
                }

                //change word to synonym
                console.log(word[0])
                this.getSynonym(word[0])
                .then(synonym => {

                    word[0] = synonym

                    for (let i = 1; i < word.length; i++) {
                        word[0] = word[0] + word[i]
                    }

                    string[index] = word[0]
                    console.log(string[index])
                })
                
            }else{

                //change word to synonym
                console.log(string[index])
                // this.getSynonym(string[index])
                // .then(synonym => {
                //     string[index] = synonym
                // })

                string[index] += "(1)"

            }
        }

    }
    
})
</script>

<style lang="sass">

</style>