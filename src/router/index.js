import Vue from 'vue'
import Router from 'vue-router'
import PageProducts from '../components/page/PageProducts'
import PageCart from '../components/page/PageCart'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: { name: 'products' }
        },
        {
            path: '/products',
            name: 'products',
            component: PageProducts
        },
        {
            path: '/cart',
            name: 'cart',
            component: PageCart
        }
    ]
})
