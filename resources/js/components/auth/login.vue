<template>
    <div class="login-page">
        <div class="login-box">
            <div class="card">
                <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <form action="../../index3.html" method="post">
                    <div class="input-group mb-3">
                    <input type="email" class="form-control" placeholder="Email" v-model="form.email">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                    </div>
                    <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Password" v-model="form.password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-8">
                        <div class="icheck-primary">
                        <input type="checkbox" id="remember">
                        <label for="remember">
                            Remember Me
                        </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-4">
                        <button @click.prevent="login" class="btn btn-primary btn-block">Sign In</button>
                    </div>
                    <!-- /.col -->
                    </div>
                </form>

                <p class="mb-1">
                    <a href="forgot-password.html">I forgot my password</a>
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
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async login() {
                try {
                    const { data, status } = await axios.post('/api/login', this.form)
                    if (status === 200) {
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
