<template>
    <div class="modal-content">
        <div class="modal-header">
            <h4 v-if="!inEdition" class="modal-title">{{ $t('companies-view.new-company') }}</h4>
            <h4 v-else class="modal-title">{{ $t('companies-view.update-company') }}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                        :placeholder="$t('companies-view.company-fields.name')">
                </div>
                <div class="form-group">
                    <label for="companyEmail">{{ $t('companies-view.company-fields.email') }}</label>
                    <input
                        type="email"
                        class="form-control"
                        id="companyEmail"
                        v-model="form.email"
                        :placeholder="$t('companies-view.company-fields.email')">
                </div>
                <div class="form-group">
                    <label for="companyLogo">{{ $t('companies-view.company-fields.logo') }}</label>
                    <input
                        type="text"
                        class="form-control"
                        id="companyLogo"
                        v-model="form.logo"
                        :placeholder="$t('companies-view.company-fields.logo')">
                </div>
                <div class="form-group">
                    <label for="companyWebsite">{{ $t('companies-view.company-fields.website') }}</label>
                    <input
                        type="text"
                        class="form-control"
                        id="companyWebsite"
                        v-model="form.website"
                        :placeholder="$t('companies-view.company-fields.website')">
                </div>
            </form>
        </div>
        <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">{{ $t('commons.close') }}</button>
            <button v-if="!inEdition" type="button" @click="saveCompany" class="btn btn-primary">{{ $t('commons.save') }}</button>
            <button v-else type="button" @click="updateCompany" class="btn btn-primary">{{ $t('commons.update') }}</button>
        </div>
    </div>
</template>

<script>
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
                    logo: '',
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
                const { status } = await this.form.post('/company')
                console.log(status)
                if (status === 200 || status === 201) {
                    this.$store.dispatch('fetchCompanies')
                }
            },
            async updateCompany() {
                const { status } = await this.form.put(`/company/${this.form.id}`)
                console.log(status)
                if (status === 200) {
                    this.$store.dispatch('fetchCompanies')
                }
            },
            setFormData() {
                const {
                    id,
                    name,
                    email,
                    logo,
                    website
                } = this.$props.data

                this.form = new Form({
                    id,
                    name,
                    email,
                    logo,
                    website
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
