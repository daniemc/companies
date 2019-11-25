<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 v-if="!inEdition" class="modal-title">{{ $t('companies-view.new-company') }}</h4>
            <h4 v-else class="modal-title">{{ $t('companies-view.update-company') }}</h4>
            <button type="button" class="close" @click="resetForm" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="companyName">{{ $t('companies-view.company-fields.name') }}</label>
                    <input
                        type="text"
                        class="form-control"
                        id="companyName"
                        v-model="form.name"
                        :class="{ 'is-invalid': form.errors.has('name') }"
                        :placeholder="$t('companies-view.company-fields.name')">
                        <has-error :form="form" field="name"></has-error>
                </div>
                <div class="form-group">
                    <label for="companyEmail">{{ $t('companies-view.company-fields.email') }}</label>
                    <input
                        type="email"
                        class="form-control"
                        id="companyEmail"
                        v-model="form.email"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                        :placeholder="$t('companies-view.company-fields.email')">
                        <has-error :form="form" field="email"></has-error>
                </div>
                <div class="form-group">
                    <label for="companyLogo">{{ $t('companies-view.company-fields.logo') }}</label>
                    <input
                        type="file"
                        class="form-control"
                        id="companyLogo"
                        @change="selectFile"
                        :class="{ 'is-invalid': form.errors.has('logo') }"
                        :placeholder="$t('companies-view.company-fields.logo')">
                        <has-error :form="form" field="logo"></has-error>
                </div>
                <div class="form-group">
                    <label for="companyWebsite">{{ $t('companies-view.company-fields.website') }}</label>
                    <input
                        type="text"
                        class="form-control"
                        id="companyWebsite"
                        v-model="form.website"
                        :class="{ 'is-invalid': form.errors.has('website') }"
                        :placeholder="$t('companies-view.company-fields.website')">
                        <has-error :form="form" field="website"></has-error>
                </div>
            </form>
        </div>
        <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" @click="resetForm">{{ $t('commons.close') }}</button>
            <button v-if="!inEdition" type="button" @click="saveCompany" class="btn btn-primary">{{ $t('commons.save') }}</button>
            <button v-else type="button" @click="updateCompany" class="btn btn-primary">{{ $t('commons.update') }}</button>
        </div>
    </div>
</template>

<script>
    import objectToFormData from 'object-to-formdata'
    export default {
        name: 'companies-form',
        props: {
            inEdition: {
                type: Boolean,
                default: false
            },
            data: {
                type: Object,
            }
        },
        data() {
            return {
                form: new Form({
                    id: '',
                    name: '',
                    email: '',
                    logo: null,
                    website: '',
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
            async saveCompany() {
                const { status } = await this.form.post('/company', {
                    transformRequest: [function(data, headers) {
                        return objectToFormData(data)
                    }]
                })
                if (status === 200) {
                    this.resetForm()
                    this.$store.dispatch('fetchCompanies', { page: 1})
                    this.$swal.fire({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        title: this.$t('messages.success'),
                        text: this.$t('companies-view.messages.saved'),
                        type: 'success',
                    })
                }
            },
            async updateCompany() {
                const { status } = await this.form.put(`/company/${this.form.id}`)
                if (status === 200) {
                    if (this.form.logo) {
                        const { statusLogo } = await this.form.post('/company/update/logo', {
                            transformRequest: [function(data, headers) {
                                return objectToFormData(data)
                            }]
                        })
                    }
                    this.resetForm()
                    this.$store.dispatch('fetchCompanies', { page: 1})
                    this.$swal.fire({
                        toast: true,
                        position: 'bottom-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        title: this.$t('messages.success'),
                        text: this.$t('companies-view.messages.updated'),
                        type: 'success',
                    })
                }
            },
            setFormData() {
                const {
                    id,
                    name,
                    email,
                    website
                } = this.$props.data

                this.form = new Form({
                    id,
                    name,
                    email,
                    website,
                    logo: null
                })
            },
            selectFile(e) {
                const file = e.target.files[0]
                this.form.logo = file
            },
            resetForm() {
                $('#modal-companies-form').modal('hide')
                this.form.clear()
                this.form.reset()
                this.form = new Form({
                    id: '',
                    name: '',
                    email: '',
                    logo: null,
                    website: '',
                })
                this.$emit('onClearModal')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
