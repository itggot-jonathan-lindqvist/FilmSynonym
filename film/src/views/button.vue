<template lang="pug">
    .button
        input(type="text" v-model="inputField")
        button(@click="action") {{buttonText}}
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

        props: ["buttonText"],

        data: () => ({
            inputField: ""
        }),
        methods: {
            action(params:any) {
                this.$emit("post_data", this.inputField)
            }
        }
})
</script>
<style lang="sass" scoped>

</style>
