<template>
    <div class="container mt-5 mb-5">
        <div class="row flex-wrap">
            <div class="col-4">
                <div class="card-photo">
                    <img src="https://st4.depositphotos.com/1064024/20942/i/600/depositphotos_209420380-stock-photo-digital-illustration-little-cute-unicorn.jpg" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col-5">
                <div class="card-wrap-info">
                    <div class="card-title">{{ post.title }}</div>
                    <div class="card-price mt-5">{{ post.price }} грн</div>
                    <div class="btn-buy d-flex justify-content-center mt-5">
                        <a href="#"><span>Купить</span></a>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="row justify-content-end">
                    <div class="col-4">
                        <img class="profile-img" src="https://i.gifer.com/origin/23/23beb39dcd0aeeeac67c095a92a1d168_w200.gif" alt="">
                    </div>
                    <div class="col-6">
                        <div class="profile-name"><router-link to="/">Diskrize1990</router-link></div>
                        <div class="profile-town">Краматорск</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-10">
                <div class="row">
                    <div class="col-6">
                        <div class="card-body">{{ post.body }}</div>
                    </div>
                </div>
            </div>
            <div class="col-2">

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Card",
    data: () => ({
        post: [],
        not_found: false,
    }),
    mounted() {
        this.loadCard(this.$route.params.id);
    },
    methods: {
        loadCard(id) {
            axios.get('/api/posts/' + id)
            .then(res => {
                this.post = res.data;
            })
            .catch(err => {
                this.not_found = true;
            })
        }
    }
}
</script>

<style scoped>

</style>
