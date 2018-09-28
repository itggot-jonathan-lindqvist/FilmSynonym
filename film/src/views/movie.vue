<template lang="pug">
    h1 Filmdata.movie.Title
</template>
<script lang="ts">
import Vue from 'vue'
import Filmdata from '@/components/MovieGrid.vue'
export default Vue.extend({
    name: 'movie',
    components: {
      Filmdata,
    },
    
})
</script>
<style lang="sass">

</style>
