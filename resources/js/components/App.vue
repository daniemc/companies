<template>
    <div id="app">
        <transition name="page" mode="out-in">
            <component v-if="layout" :is="layout"></component>
        </transition>
    </div>
</template>

<script>
    import defaultLayout from './../layouts/default'
    import appLayout from './../layouts/app'
    export default {
        name: 'App',
        components: {
            defaultLayout,
            appLayout
        },
        computed: {
            layout() {
                return this.$store.getters.layout
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
