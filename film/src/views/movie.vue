<template lang="pug"> 
.movie
    div(v-if="loading")
        p its loading
    div(v-else)
        p {{this.plot}}

</template>
<script lang="ts">
import Vue from 'vue'
//import Filmdata from '@/components/MovieGrid.vue'

export default Vue.extend({
    name: 'Filmdata',
    // name: 'movie',
    // components: {
    //   Filmdata,
    // },

    props:{
        lul: Object
    },
    data: function () {
        return {
            title: this.$route.params.movie,
            loading: true,
            plot: ""
        }
    },

    // const router = new VueRouter({
    //         routes: [
    //         // dynamic segments start with a colon
    //         { path: '/:movie', component: Movie }
    //                 ]
    //         }),
    methods:{

    
        // test: function(){
        //     console.log(this.$route.params)
        //     console.log("hjafs")
        //     console.log(this.lul.foo)
        // //     //this.$emit()
        // //     //localStorage.getItem('movie')
        // //     //console.log(JSON.parse(movie))
        // },
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
        

            //console.log(response)
            //let movie = this.movie
            //movie.push(response.data)
            //this.movie = response.data
            //console.log(movie)

        })
    }
    
})
</script>
<style lang="sass">

</style>
