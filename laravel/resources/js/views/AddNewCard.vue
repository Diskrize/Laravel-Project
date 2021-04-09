<template>
    <div class="container">
        <div class="wrap-form">
            <form>
                <h1>Вход</h1>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <label for="form_title">Название</label>
                        <input type="text" class="form-control" id="form_title" placeholder="Заголовок" v-model="form.title">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="form-group" >
                        <input type="file" class="form-control-file">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <textarea class="form-control" id="inputPassword3" placeholder="Описание товара" v-model="form.body"></textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputPassword2" placeholder="Цена" v-model="form.price">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary" @click.prevent="store">Опубликовать</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name: "AddNewCard",
    data: () => ({
        form: {
            title: "",
            body: "",
            price: "",
            photo: ""
        },
    }),
    methods: {
        store() {
            axios.post('/api/posts', this.form, {
                headers: {
                    "Content-type": "application/json",
                }
            })
                .then(res => {
                    if (res.data.status) {
                        this.$router.push('/post/' + res.data.post.id);
                    }
                })
        },
    }
}
</script>

<style scoped>
.wrap-form {
    margin-bottom: 0px;
}
</style>
