<template>
    <div class="wrapper">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
                </li>
            </ul>
        </nav>
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
    import  SideBarMenu from './../components/commons/SideBarMenu'
    export default {
        name: 'app-layout',
        components: {
            'side-bar-menu': SideBarMenu,
        },
    }
</script>

<style lang="scss" scoped>

</style>
