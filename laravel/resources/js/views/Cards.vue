<template>
    <section class="main">
        <div class="container">
            <div class="row">
                <div class="wrap d-flex flex-wrap align-items-center">
                    <div class="card" style="width: 18rem;" v-for="post in posts">
                        <img src="https://st4.depositphotos.com/1064024/20942/i/600/depositphotos_209420380-stock-photo-digital-illustration-little-cute-unicorn.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title"><router-link :to="{name:'card', params: { id: post.id}}">{{ post.title }}</router-link></h5>
                            <p class="card-text">{{ post.body }}</p>
                            <p class="card-text">{{ post.price }}</p>
                            <p class="card-text">{{ post.created_at }}</p>
<!--                            <router-link :to="{name:'card', params: { id: post.id}}" class="btn btn-primary">Go somewhere</router-link>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: "Cards",
    data: () => ({
        posts: [],
    }),
    mounted() {
        this.loadPosts()
    },
    methods: {
         loadPosts() {
            axios.get('/api/posts/')
                .then(res => {
                    this.posts = res.data;
                })
        }
    },
}
</script>

<style scoped>

</style>
