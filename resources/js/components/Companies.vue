<template>
    <div>
        <page-header :pageName="pageName" :pageBreadCrumb="pageBreadCrumb"></page-header>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body">
                                Hello there!!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'companies-view',
        data() {
            return {
                pageName: 'Companies',
                pageBreadCrumb: [
                    { name: 'Home', active: false, url: '/home' },
                    { name: 'Companies', active: true, url: '/companies' },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
