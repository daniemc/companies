<template>
    <div>
        <page-header :pageName="pageName" :pageBreadCrumb="pageBreadCrumb"></page-header>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-title">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">
                                    </div>
                                    <div class="col-sm-12 col-md-6 text-right">
                                        <button
                                            type="button"
                                            class="btn btn-success btn-md mt-3 mr-4"
                                            data-toggle="modal"
                                            data-target="#modal-companies-form"
                                            @click="companyInEdition = {}">
                                            <i class="fas fa-plus"></i>
                                            {{ $t('companies-view.btn-new') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered table-hover table-condensed">
                                    <thead>
                                        <tr>
                                            <th class="text-center">{{ $t('companies-view.company-fields.name') }}</th>
                                            <th class="text-center">{{ $t('companies-view.company-fields.email') }}</th>
                                            <th class="text-center">{{ $t('companies-view.company-fields.logo') }}</th>
                                            <th class="text-center">{{ $t('companies-view.company-fields.website') }}</th>
                                            <th class="text-center">{{ $t('companies-view.company-fields.actions') }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(company, c) in companies.data" :key="c" >
                                            <td class="text-center">{{ company.name }}</td>
                                            <td class="text-center">{{ company.email }}</td>
                                            <td class="text-center">{{ company.logo }}</td>
                                            <td class="text-center">{{ company.website }}</td>
                                            <td class="text-center">
                                                <button type="button" @click="editCompany(company.id)" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#modal-companies-form">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button type="button" @click="deleteCompany(company.id)" class="btn btn-danger btn-xs">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer">
                                <pagination :data="companies" @pagination-change-page="init"></pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modal-companies-form">
            <div class="modal-dialog">
                <companies-form :inEdition="inEdition" :data="companyInEdition" v-on:onClearModal="inEdition = false"></companies-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CompaniesForm from './Form'
    export default {
        name: 'companies-view',
        components: {
            'companies-form': CompaniesForm,
        },
        data() {
            return {
                pageName: 'Companies',
                pageBreadCrumb: [
                    { name: 'Home', active: false, url: '/home' },
                    { name: 'Companies', active: true, url: '/companies' },
                ],
                inEdition: false,
                companyInEdition: {}
            }
        },
        created () {
            this.init();
        },
        computed: mapGetters({
            companies: 'companies',
        }),
        methods: {
            init(page = 1) {
                this.$store.dispatch('fetchCompanies', { page })
            },
            editCompany(id) {
                this.inEdition = true
                this.companyInEdition = this.companies.data.find(company => company.id === id)
            },
            deleteCompany(id) {
                axios.delete(`/company/${id}`)
                    .then(({ status }) => {
                        if (status === 200) {
                            this.$store.dispatch('fetchCompanies', { page: 1 })
                        }
                    })
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
