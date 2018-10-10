<template lang="pug">
    .container#test
        div(v-if="loading")
            p it's loading
        div(v-else)
            .container-item
                .go_back-container
                    i.material-icons.go_back#goback123 arrow_back
                .title-container
                    h1.movie_title {{ this.title }}
                .switch-container
                    .switch-container-item1
                        .switch-container-item2
                            h1 Change Words
                            .switch(@click="switchWords" v-class="{active: isActive}" :style="{justifyContent: activeFlex}")
                                .switch-ball(:style="{backgroundColor: activeColor}")
            .container-item.plot-text-container
                p.plot-text#plot {{ this.plot }}
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({

    data: function() {
        return {
        title: this.$route.params.movie,
        loading: true,
        plot: "",
        isActive: false,
        activeColor: null,
        activeFlex: null
        }
    },

    methods: {
        switchWords: function() {
            this.isActive = !this.isActive
            if (this.isActive == true) {
                this.activeFlex = "flex-end"
                this.activeColor = "dodgerblue"
            }else{
                this.activeFlex = null
                this.activeColor = null
            }
        },
    },

    mounted(){
        console.log("Hello, I'm mounted")
        console.log(this.title)
        let key = "57b31362",
            baseurl = "https://www.omdbapi.com/?apikey=" + key;
        axios.get(baseurl + "&t=" + this.title).then((response) => {
            console.log("here")
            console.log(response.data.Plot)
            this.plot = response.data.Plot
            // insert word loop here with throttler 
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
