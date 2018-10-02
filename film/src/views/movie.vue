<template lang="pug"> 
.movie
    div(v-if="loading")
        p its loading
    div(v-else)
        p {{this.plot}}

</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Filmdata',

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

    methods:{

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

</style>
