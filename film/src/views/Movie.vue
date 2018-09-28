<template lang="pug">
    .container
        .container-item
            .go_back-container
                i.material-icons.go_back arrow_back
            .title-container
                h1.movie_title Star Wars
            .switch-container
                .switch-container-item1
                    .switch-container-item2
                        h1 Change Words
                        .switch
                            .switch-ball
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

<style lang="sass">

    .go_back-container, .switch-container
        height: 100%
        width: 20%
        display: flex
        flex-direction: row

    .switch-container
        background-color: red
    
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
    

</style>
