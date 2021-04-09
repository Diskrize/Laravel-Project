<template>
    <div class="container">
        <div class="wrap-form">
            <form action="#" @submit.prevent="login">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email адрес</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="username">
    <!--                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Пароль</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
name: "Login",
    data: () => ({
        username: "",
        password: "",
    }),
    methods: {
        login() {
            this.$store.dispatch('retrieverToken', {
                username: this.username,
                password: this.password,
            })
        }
    }
}
</script>

<style scoped>

</style>
