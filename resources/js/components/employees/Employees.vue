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
                                            data-target="#modal-employees-form"
                                            @click="employeeInEdition = {}">
                                            <i class="fas fa-plus"></i>
                                            {{ $t('employees-view.btn-new') }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <table class="table table-bordered table-hover table-condensed">
                                    <thead>
                                        <tr>
                                            <th class="text-center">{{ $t('employees-view.employee-fields.first_name') }}</th>
                                            <th class="text-center">{{ $t('employees-view.employee-fields.last_name') }}</th>
                                            <th class="text-center">{{ $t('employees-view.employee-fields.email') }}</th>
                                            <th class="text-center">{{ $t('employees-view.employee-fields.phone') }}</th>
                                            <th class="text-center">{{ $t('employees-view.employee-fields.company') }}</th>
                                            <th class="text-center">{{ $t('employees-view.employee-fields.actions') }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(employee, c) in employees.data" :key="c" >
                                            <td class="text-center">{{ employee.first_name }}</td>
                                            <td class="text-center">{{ employee.last_name }}</td>
                                            <td class="text-center">{{ employee.email }}</td>
                                            <td class="text-center">{{ employee.phone }}</td>
                                            <td class="text-center">{{ employee.company.name }}</td>
                                            <td class="text-center">
                                                <button type="button" @click="editEmployee(employee.id)" class="btn btn-primary btn-xs" data-toggle="modal" data-target="#modal-employees-form">
                                                    <i class="fas fa-edit"></i>
                                                </button>
                                                <button type="button" @click="deleteEmployee(employee.id)" class="btn btn-danger btn-xs">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="card-footer">
                                <pagination :data="employees" @pagination-change-page="init"></pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modal-employees-form">
            <div class="modal-dialog">
                <employees-form :inEdition="inEdition" :data="employeeInEdition" :companies="companies" v-on:onClearModal="inEdition = false"></employees-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import EmployeesForm from './Form'
    import axios from 'axios'
    export default {
        name: 'employees-view',
        components: {
            'employees-form': EmployeesForm,
        },
        data() {
            return {
                pageName: this.$t('employees-view.name'),
                pageBreadCrumb: [
                    { name: this.$t('home-view.name'), active: false, url: '/home' },
                    { name: this.$t('employees-view.name'), active: true, url: '/employees' },
                ],
                inEdition: false,
                employeeInEdition: {}
            }
        },
        created () {
            this.init();
        },
        computed: mapGetters({
            employees: 'employees',
            companies: 'allCompanies',
        }),
        methods: {
            init(page = 1) {
                this.$store.dispatch('fetchEmployees', { page })
                this.$store.dispatch('fetchAllCompanies')
            },
            editEmployee(id) {
                this.inEdition = true
                this.employeeInEdition = this.employees.data.find(employee => employee.id === id)
            },
            deleteEmployee(id) {
                axios.delete(`/employee/${id}`)
                    .then(({ status }) => {
                        if (status === 200) {
                            this.$store.dispatch('fetchEmployees', { page: 1})
                            this.$swal.fire({
                                toast: true,
                                position: 'bottom-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                title: this.$t('messages.success'),
                                text: this.$t('employees-view.messages.deleted'),
                                type: 'success',
                            })
                        }
                    })
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
