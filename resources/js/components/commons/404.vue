<template>
    <div>
        <page-header :pageName="pageName" :pageBreadCrumb="pageBreadCrumb"></page-header>
        <section class="content">
            <div class="error-page">
                <h2 class="headline text-warning"> 404</h2>

                <div class="error-content">
                <h3><i class="fas fa-exclamation-triangle text-warning"></i>{{ $t('404-view.title') }}</h3>

                <p>
                    {{ $t('404-view.text') }}
                    <router-link to="/home">{{ $t('404-view.btn_text') }}</router-link>
                </p>

                </div>
                <!-- /.error-content -->
            </div>
            <!-- /.error-page -->
        </section>
    </div>
</template>

<script>
    export default {
        name: 'not-found-404-view',
        data() {
            return {
                pageName: '404 Error page',
                pageBreadCrumb: [
                    { name: 'Home', active: false, url: '/home' },
                    { name: '404 Error page', active: true, url: '/not_found' },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
