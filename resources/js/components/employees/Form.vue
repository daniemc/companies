<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 v-if="!inEdition" class="modal-title">{{ $t('employees-view.new-employee') }}</h4>
            <h4 v-else class="modal-title">{{ $t('employees-view.update-employee') }}</h4>
            <button type="button" class="close" @click="resetForm" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="employeeName">{{ $t('employees-view.employee-fields.first_name') }}</label>
                    <input
                        type="text"
                        class="form-control"
                        id="employeeName"
                        :class="{ 'is-invalid': form.errors.has('first_name') }"
                        v-model="form.first_name"
                        :placeholder="$t('employees-view.employee-fields.first_name')">
                        <has-error :form="form" field="first_name"></has-error>
                </div>
                <div class="form-group">
                    <label for="employeeLastName">{{ $t('employees-view.employee-fields.last_name') }}</label>
                    <input
                        type="text"
                        class="form-control"
                        id="employeeLastName"
                        :class="{ 'is-invalid': form.errors.has('last_name') }"
                        v-model="form.last_name"
                        :placeholder="$t('employees-view.employee-fields.last_name')">
                        <has-error :form="form" field="last_name"></has-error>
                </div>
                <div class="form-group">
                    <label for="employeeEmail">{{ $t('employees-view.employee-fields.email') }}</label>
                    <input
                        type="email"
                        class="form-control"
                        id="employeeEmail"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                        v-model="form.email"
                        :placeholder="$t('employees-view.employee-fields.email')">
                        <has-error :form="form" field="email"></has-error>
                </div>
                <div class="form-group">
                    <label for="employeePhone">{{ $t('employees-view.employee-fields.phone') }}</label>
                    <input
                        type="text"
                        class="form-control"
                        id="employeePhone"
                        :class="{ 'is-invalid': form.errors.has('phone') }"
                        v-model="form.phone"
                        :placeholder="$t('employees-view.employee-fields.phone')">
                        <has-error :form="form" field="phone"></has-error>
                </div>
                <div class="form-group">
                    <label for="employeeCompany">{{ $t('employees-view.employee-fields.company') }}</label>
                    <select
                        class="form-control"
                        id="employeeCompany"
                        :class="{ 'is-invalid': form.errors.has('company_id') }"
                        v-model="form.company_id">
                        <option
                            v-for="(company, c) in companies"
                            :key="c"
                            :value="company.id">{{ company.name }}</option>
                    </select>
                    <has-error :form="form" field="company_id"></has-error>
                </div>
            </form>
        </div>
        <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" @click="resetForm">{{ $t('commons.close') }}</button>
            <button v-if="!inEdition" type="button" @click="saveEmployee" class="btn btn-primary">{{ $t('commons.save') }}</button>
            <button v-else type="button" @click="updateEmployee" class="btn btn-primary">{{ $t('commons.update') }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'employees-form',
        props: {
            inEdition: {
                type: Boolean,
                default: false
            },
            data: {
                type: Object,
            },
            companies: {
                type: Array,
            }
        },
        data() {
            return {
                form: new Form({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    company_id: '',
                })
            }
        },
        watch: {
            inEdition(newValue, oldValue) {
                if (newValue && !oldValue) {
                    if (Object.keys(this.$props.data).length > 0) {
                        this.setFormData()
                    }
                }
            }
        },
        methods: {
            async saveEmployee() {
                const { status } = await this.form.post('/employee')
                if (status === 200) {
                    this.$store.dispatch('fetchEmployees', { page: 1})
                    this.$swal.fire({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        title: this.$t('messages.success'),
                        text: this.$t('employees-view.messages.saved'),
                        type: 'success',
                    })
                }
            },
            async updateEmployee() {
                const { status } = await this.form.put(`/employee/${this.form.id}`)
                if (status === 200) {
                    this.$store.dispatch('fetchEmployees', { page: 1})
                    this.$swal.fire({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        title: this.$t('messages.success'),
                        text: this.$t('employees-view.messages.updated'),
                        type: 'success',
                    })
                }
            },
            setFormData() {
                const {
                    id,
                    first_name,
                    last_name,
                    email,
                    phone,
                    company_id
                } = this.$props.data

                this.form = new Form({
                    id,
                    first_name,
                    last_name,
                    email,
                    phone,
                    company_id
                })
            },
            resetForm() {
                $('#modal-employees-form').modal('hide')
                this.form.clear()
                this.form.reset()
                this.form = new Form({
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    company_id: '',
                })
                this.$emit('onClearModal')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
