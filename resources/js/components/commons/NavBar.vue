<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <i class="fas fa-language big-icon"></i>
                    <span class="normal-font">{{ lang }}</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right p-0">
                    <a href="#" @click="switLang('en')" class="dropdown-item" :class="{ 'active': lang === 'EN' }">
                        <i class="flag-icon flag-icon-us mr-2"></i> {{ $t('commons.en') }}
                    </a>
                    <a href="#" @click="switLang('es')" class="dropdown-item" :class="{ 'active': lang === 'ES' }">
                        <i class="flag-icon flag-icon-es mr-2"></i> {{ $t('commons.es') }}
                    </a>
                </div>
            </li>
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
    import axios from 'axios'
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
            },
            lang() {
                return this.$store.getters.lang.toUpperCase()
            }
        },
        methods: {
            async logout() {
                await axios.post('/logout')
                this.$store.dispatch('logout')
                this.$router.push({ name: 'login' })
            },
            switLang(lang) {
                this.$store.dispatch('updateUserLang', lang)
                this.$store.commit('SET_LANG', lang)
            }
        },
    }
</script>

<style scoped>
    .big-icon {
        font-size: 35px;
        margin-top: -7px;
    }
    .normal-font {
        font-size: 20px !important;
    }
</style>
