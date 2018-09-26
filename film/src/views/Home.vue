<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <movieGrid msg="B Movies"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import movieGrid from '@/components/MovieGrid.vue';
export default Vue.extend({
  name: 'home',
  components: {
    movieGrid,
  },
});
</script>
