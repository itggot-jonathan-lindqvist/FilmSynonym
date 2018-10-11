<template lang="pug">
.switch(@click="change" :class="{active: isActive}" :style="{justifyContent: activeFlex}")
        .switch-ball(:style="{backgroundColor: activeColor}")

</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios"

export default Vue.extend({

    data: function(){
        return {
            isUsed: false,
            isActive: false,
            activeColor: null,
            activeFlex: null,
        }
    },

    methods: { 
        change: function() {
            this.$emit('active', this.isActive)
            this.isActive = !this.isActive  
            if(this.$parent.$parent.$data.theme == false){
                if (this.isActive == true) {
                    this.activeFlex = "flex-end"
                    this.activeColor = "dodgerblue"
                }else{
                    this.activeFlex = null
                    this.activeColor = null
                }
            }else{
                if (this.isActive == true) {
                    this.activeFlex = "flex-end"
                    this.activeColor = "#8d2663"
                }else{
                    this.activeFlex = null
                    this.activeColor = null
                }
            }
        }
    }
})
</script>

<style lang="sass">

</style>