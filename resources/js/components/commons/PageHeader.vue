<template>
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
            <div class="col-sm-6">
                <h1>{{ pageName }}</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li
                        v-for="(breadcrumb, bc) in pageBreadCrumb"
                        :key="bc"
                        class="breadcrumb-item"
                        :class="breadcrumb.active ? 'active' : ''"
                    >
                        <router-link :to="breadcrumb.url">{{ breadcrumb.name }}</router-link>
                    </li>
                </ol>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'page-header',
        props: {
            pageName: {
                type: String,
                default: ''
            },
            pageBreadCrumb: {
                type: Array,
                default: []
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
