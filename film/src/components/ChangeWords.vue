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
                console.log(plot)
                let title = this.title.split(/[.,\/ -]/)

                for (let index = 0; index < plot.length; index++) {
                    if(/[.,':\/ -]/.test(plot[index])){
                        let word = plot[index].split("")
                        let i = 1
                        while (/[.,':\/ -]/.test(word[i]) == false) {
                            word[0] = word[0] + word[i]
                            word[i] = ""
                            i++
                        }

                        //change word to synonym
                        word[0] = word[0] + "(2)"
                        
                        for (let i = 1; i < word.length; i++) {
                            word[0] = word[0] + word[i]
                        }
                        
                        plot[index] = word[0]
                        
                    }else{

                        //change word to synonym
                        plot[index] = plot[index] + "(1)"
                    }
                }

                console.log(plot)

            }else{
                this.activeFlex = null
                this.activeColor = null
            }            
            
        },

        getSynonym: function() {
            
        }

    }
    
})
</script>

<style lang="sass">

</style>