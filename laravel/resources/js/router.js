import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AboutUs from "./Pages/AboutUs";
import Cards from "./views/Cards";
import Card from "./views/Card";
import AddNewCard from "./views/AddNewCard";
import Login from "./views/Login";
import Registration from "./views/Registration";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path:"/", name:'main', component: Cards},
        {path:"/card/:id", name:'card', component: Card},
        {path:"/about", name:'about', component: AboutUs},
        {path:"/create", name:'addCard', component: AddNewCard},
        {path:"/login", name:'login', component: Login},
        {path:"/registration", name:'registration', component: Registration},
    ]
})

export default router;
