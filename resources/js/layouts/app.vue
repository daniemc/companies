<template>
    <div class="wrapper">
        <nav-bar></nav-bar>
        <side-bar-menu></side-bar-menu>
        <div class="content-wrapper">
            <div class="content">
                <div class="container-fluid">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBarMenu from './../components/commons/SideBarMenu'
    import NavBar from './../components/commons/NavBar'
    export default {
        name: 'app-layout',
        components: {
            'side-bar-menu': SideBarMenu,
            'nav-bar': NavBar
        },
    }
</script>

<style lang="scss" scoped>

</style>
