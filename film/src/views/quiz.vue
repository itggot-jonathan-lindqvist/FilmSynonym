<template lang="pug">
    .container-fluid
        h2 Quiz
        div(v-if="start")
            .btn-primary.btn-lg.btn.btn-block(@click="start=false" id="btn" ) START
        div(v-else)
            .title(class="border border-dark")
                p HEllO
            .plot
             p SAy WHAT

</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(BootstrapVue);
export default Vue.extend({
  data: function() {
    return {
      start: true
    };
  },

  methods: {}
});
</script>


<style lang="sass">

    // .titles
    //     width: 100%
    //     heigth: 30vh
    //     margin: auto
        
    // .plot
    //     width: 100%
    //     heigth: 30vh
    //     margin: auto
    // #btn
    //     background: #456
    //     padding: 10px
    //     margin: auto

    // div
    //     width: 100%

        
</style>

