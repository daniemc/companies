<template>
    <div>
        <page-header :pageName="pageName" :pageBreadCrumb="pageBreadCrumb"></page-header>
        <div>
            <span>
                Hey, logued in!!!
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home-view',
        data() {
            return {
                pageName: 'Home',
                pageBreadCrumb: [
                    { name: 'Home', active: true, url: '/home' },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
