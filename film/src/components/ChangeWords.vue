<template lang="pug">
.switch-container-item2
    h1 Change Words
    .switch(@click="switchWords" v-class="{active: isActive}" :style="{justifyContent: activeFlex}")
        .switch-ball(:style="{backgroundColor: activeColor}")

</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios"
export default Vue.extend({

    data: () => ({
        string: "Star Wars"
    }),

    methods: {
        changeWords: function() {
            let string = this.string

            console.log(string.split)


        }
    }
    
})
</script>

<style lang="sass">

</style>