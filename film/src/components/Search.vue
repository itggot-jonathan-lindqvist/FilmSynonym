<template lang="pug">
    input(type="text" v-model="keyword" @keyup.enter="searchMovies()").search-text
    button(@click="searchMovies").search-button
        i.material-icons.search-button.value search
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="sass">

</style>
