<template lang="pug">
    .container
        .container-item
            .go_back-container
                i.material-icons.go_back arrow_back
            .title-container
                h1.movie_title Star Wars
            .switch-container
                .switch-container-item1
                    changeWords
        .container-item.plot-text-container
            p.plot-text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia condimentum aliquam. Vestibulum mollis metus ac massa sollicitudin eleifend. Nunc consectetur posuere neque, ut tempor lorem euismod nec. Mauris id ipsum ut dui tempor porta. Duis convallis aliquet lectus ac blandit. Curabitur eu neque sed mi euismod mattis. Suspendisse congue augue volutpat, pulvinar nisl vel, finibus risus. Cras scelerisque odio in pellentesque pulvinar. Suspendisse faucibus vulputate urna vel ultricies. Sed nec varius lorem. Integer vitae malesuada erat. Pellentesque eu tellus ornare, sodales turpis eget, porta arcu. In hac habitasse platea dictumst. Integer elit nulla, rutrum eget aliquam sagittis, vulputate vitae sem. Donec dictum varius volutpat. In in leo sit amet quam elementum gravida. Pellentesque sagittis metus sed magna dapibus, sed sagittis metus maximus. Etiam malesuada lorem ac massa porta, sed porttitor mauris tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vestibulum elit eu justo iaculis varius. Vivamus faucibus, turpis vel iaculis suscipit, orci eros posuere tellus, vel malesuada metus dui ut nisi. Vestibulum in lacus ligula. Fusce id pulvinar odio, ultrices tempor massa. Donec commodo ante quis eros euismod, lobortis sollicitudin massa scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla eget dapibus odio. Fusce nunc lacus, eleifend feugiat ex et, pretium aliquam lacus. Cras viverra dolor at velit euismod, eget accumsan tellus pharetra. Integer nec dapibus risus, ac lobortis tortor. Donec non sodales sapien, vitae aliquam sem. Sed magna risus, porttitor ac sollicitudin sit amet, maximus in enim. Maecenas ullamcorper, odio at malesuada elementum, libero urna laoreet felis, nec tincidunt arcu sem id augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis blandit diam. Donec ac odio rutrum magna volutpat vehicula et non risus. Sed quis consectetur lorem.
</template>

<script lang="ts">
import Vue from 'vue'
import changeWords from '@/components/ChangeWords.vue'
export default Vue.extend({

    components: {
        changeWords,
    },

    data: ()  => ({
        isActive: false,
        activeColor: null,
        activeFlex: null
    }),
    
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

        }
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
