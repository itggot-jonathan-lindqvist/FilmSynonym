<template lang="pug">
    button(@click="throttledMethod()") Click me as fast as you can!
</template>
<script lang="ts">
import Vue from "vue";
import _ from "lodash";
export default Vue.extend({
  methods: {
    throttledMethod: _.debounce(() => {
      console.log("I only get fired once every two seconds, max!");
    }, 2000)
  }
});
</script>
<style lang="sass" scoped>

</style>

