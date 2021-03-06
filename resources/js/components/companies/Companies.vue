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
                                <table class="table table-bordered table-hover table-sm">
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
                                            <td class="text-center align-middle">{{ company.name }}</td>
                                            <td class="text-center align-middle">{{ company.email }}</td>
                                            <td class="text-center align-middle">
                                                <img
                                                    class="company-logo"
                                                    height="100px"
                                                    width="100px"
                                                    :src="`${appUrl}/storage/${company.logo}`"
                                                    alt="company_logo">
                                            </td>
                                            <td class="text-center align-middle">
                                                <a
                                                    :href="company.website"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                        {{ company.website }}
                                                    </a>
                                            </td>
                                            <td class="text-center align-middle">
                                                <button type="button" @click="editCompany(company.id)" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modal-companies-form">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button type="button" @click="deleteCompany(company.id)" class="btn btn-danger btn-sm">
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
                pageName: this.$t('companies-view.name'),
                pageBreadCrumb: [
                    { name: this.$t('home-view.name'), active: false, url: '/home' },
                    { name: this.$t('companies-view.name'), active: true, url: '/companies' },
                ],
                inEdition: false,
                companyInEdition: {},
                appUrl: window.config.appUrl
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
                            this.$swal.fire({
                                toast: true,
                                position: 'bottom-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                title: this.$t('messages.success'),
                                text: this.$t('companies-view.messages.deleted'),
                                type: 'success',
                            })
                        }
                    })
            },
        },
    }
</script>

<style >
    .company-logo {
        object-fit: contain;
    }
</style>
