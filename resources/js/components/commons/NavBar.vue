<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown user-menu">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img :src="userImg" class="user-image img-circle elevation-2" alt="User Image">
                    <span class="d-none d-md-inline">{{ user.name }}</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <li class="user-footer">
                        <button @click="logout" type="button" class="btn btn-default btn-flat float-right">Sign out</button>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'nav-bar',
        data() {
            return {
                userImg: window.config.userImg
            }
        },
        computed: {
            user() {
                return this.$store.getters.authUser
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('logout')
                this.$router.push({ name: 'login' })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
