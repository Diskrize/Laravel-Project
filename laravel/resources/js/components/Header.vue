<template>
    <section class="header">
        <div class="info-line">
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-start">
                        <div ><a href="\"><img class="logo" src="https://www.vikiweb.ru/images/sozdanie-logotipa.png" alt="logo"></a></div>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-end">
                        <button class="btn-enter-reg d-flex justify-content-center" @click="$router.push('/login')">
                            <a href="#"><span>Вход</span></a>
                        </button>
                        <button class="btn-enter-reg d-flex justify-content-center ml-2" @click="$router.push('/registration')">
                            <a href="#"><span>Регистрация</span></a>
                        </button>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-end">
                        <button class="btn-add d-flex justify-content-center" @click="$router.push('/create')">
                            <a href="#"><span>Добавить товар</span></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu_header">
            <div class="container">
                <nav class="navbar navbar-expand-lg bg-white navbar-light d-flex">
                        <button class="navbar-toggler" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav menu_list d-flex" v-for="link in links">
                            <li class="nav-item active menu__item"><router-link :to="link.href" class="nav-link active">{{ link.title }}</router-link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            links:[
                {
                title: 'Главная',
                href: '/'
                },
                {
                    title: 'Новинки',
                    href: '/'
                },
                {
                    title: 'О нас',
                    href: '/about'
                }
            ]
        }
    }
}
    </script>

<style scoped>

</style>
