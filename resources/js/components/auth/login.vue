<template>
    <div class="login-page">
        <div class="login-box">
            <div class="card">
                <div class="card-body login-card-body">
                <p class="login-box-msg">{{ $t('login-view.title') }}</p>
                <form>
                    <div class="input-group mb-3">
                        <input
                            type="email"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('email') }"
                            :placeholder="$t('login-view.email')"
                            v-model="form.email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        <has-error :form="form" field="email"></has-error>
                    </div>
                    <div class="input-group mb-3">
                        <input
                            type="password"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('password') }"
                            :placeholder="$t('login-view.password')"
                            v-model="form.password"
                            >
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        <has-error :form="form" field="password"></has-error>
                    </div>
                    <div class="row">
                    <div class="col-6">
                        <!-- <div class="icheck-primary">
                        <input type="checkbox" id="remember">
                        <label for="remember">
                            Remember Me
                        </label>
                        </div> -->
                    </div>
                    <!-- /.col -->
                    <div class="col-6">
                        <button @click.prevent="login" class="btn btn-primary btn-block">{{ $t('login-view.login') }}</button>
                    </div>
                    <!-- /.col -->
                    </div>
                </form>

                <p class="mb-1">
                    <!-- <a href="forgot-password.html">I forgot my password</a> -->
                </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'login-view',
        data() {
            return {
                form: new Form({
                    email: '',
                    password: ''
                })
            }
        },
        methods: {
            async login() {
                try {
                    const { data, status } = await this.form.post('/login', this.form)
                    if (status === 200) {
                        this.$store.dispatch('saveToken', data.token)
                        await this.$store.dispatch('fetchUser')
                        this.$router.push({ name: 'home' })
                    }
                } catch (error) {
                    console.log(error)
                }

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
