<template lang="pug">
    searchButton(@post_data="test()" buttonText ="click me")
</template>
<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import Button from './button.vue'
export default Vue.extend({
  methods: {
      components: {
        'searchButton':Button  
      },
    // throttledMethod: _.throttle(() => {
    //   console.log("I only get fired once every two seconds, max!")
    // }, 2000),

    test(params:any) {
        console.log(params)
    }
  }
});
</script>
<style lang="sass" scoped>

</style>

